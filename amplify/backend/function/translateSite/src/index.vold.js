/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// attempt with sdk v3 and await - does not work

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */


const { TranslateClient, CreateParallelDataCommand } = require("@aws-sdk/client-translate");
const client = new TranslateClient({ region: "eu-west-1" });

exports.handler = async (event, context, callback) => {
  
  for (const record of event.Records) {

    var params = {
      SourceLanguageCode: 'auto',
      TargetLanguageCode: 'en',
      Text: record.dynamodb.NewImage.headline.S
    };
    
    const command = new CreateParallelDataCommand(params);
    
    // async/await.
    try {
      const data = await client.send(command);
      console.log(data['TranslatedText']);
      return callback(null, 'Successfully processed DynamoDB record');
      // process data.
    } catch (error) {
      // error handling.
        console.log(err, err.stack); 
        return callback('Failed translating the record');
    }
      
  }
};