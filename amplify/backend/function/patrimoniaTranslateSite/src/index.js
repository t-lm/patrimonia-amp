/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");
const { DynamoDBClient, UpdateItemCommand } = require("@aws-sdk/client-dynamodb");
const REGION = "eu-west-1";
const TABLE = "Site-dg6n37kw5bezfgxg7zofsv3j4m-dev"

const client = new DynamoDBClient({ region: REGION });

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

const update = async (obj) => {
  
  let ExpressionAttributeValues = { ":name": obj["name"] };
  let ExpressionAttributeNames = { "#name": "name" }
  let UpdateExpression = "SET #name = :name";

  let keys = ["name_en", "headline_en", "description_en"]  
  keys.forEach((x) => {
    ExpressionAttributeValues[`:${x}`] = obj[x];
    ExpressionAttributeNames[`#${x}`] = x;
    UpdateExpression += `, #${x} = :${x}`;
  });
  

  let input = {
    TableName: TABLE,
    ExpressionAttributeValues,
    ExpressionAttributeNames,
    UpdateExpression,
    ConditionExpression: "attribute_exists(id)",
    Key: { id: obj.id },
  };
  
  const command = new UpdateItemCommand(input);
  try {
    const response = await client.send(command);
    return response
  } catch (error) {
    console.log(error);
    return null
  }
};

exports.handler = event => {

  for (const r of event.Records) {
    translate(`${r.dynamodb.NewImage.name.S} ### ${r.dynamodb.NewImage.headline.S} ### ${r.dynamodb.NewImage.description.S}`, "en")
    .then(data => {
      let obj = {id: r.dynamodb.Keys.id, name: r.dynamodb.NewImage.name, name_en: { "S" : data.split("###")[0].trim()}, headline_en: { "S" : data.split("###")[1].trim()}, description_en: { "S" : data.split("###")[2].trim()}}
      update(obj)
      .then(res => {
        if(res) console.log(obj.id.S, "success")
        return Promise.resolve('Successfully processed DynamoDB record');
      })
      .catch(err => {
        console.log(err)
        return Promise.resolve('Failed in update');
      })
    })
    .catch(err => {
      console.log(err)
      return Promise.resolve('Failed in translation');
    })  
  }

};
