/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");

const translate = async (text, lang) => {
  const client = new TranslateClient({ region: REGION });
  const params = {
    Text: text,
    SourceLanguageCode: "fr",
    TargetLanguageCode: lang,
  };
  const command = new TranslateTextCommand(params);
  try {
    const data = await client.send(command);
    return data.TranslatedText;
  } catch (error) {
    console.log(error);
    return null
  }
};

exports.handler = event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    translate(`${record.dynamodb.NewImage.name.S} ### ${record.dynamodb.NewImage.headline.S} ### ${record.dynamodb.NewImage.description.S}`, "en")
    .then(data => console.log(data))
    .catch(err => console.log(err))  
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};
