/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// this works

var AWS = require("aws-sdk");
AWS.config.update({region: "eu-west-1"});

const translate = new AWS.Translate();

exports.handler = event => {
  
  for (const record of event.Records) {

    var params = {
      SourceLanguageCode: 'auto',
      TargetLanguageCode: 'en',
      Text: `${record.dynamodb.NewImage.headline.S}`
    };
    
    translate.translateText(params, function (err, data) {
      if (err) {
        console.log(err, err.stack); 
        return Promise.resolve('Failed translating the recor');
      }
      else    {
        
        
        console.log(data['TranslatedText']);
        return Promise.resolve('Successfully processed DynamoDB record');
      }
    });
  }
};