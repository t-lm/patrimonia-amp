/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

var AWS = require("aws-sdk");
AWS.config.update({region: "eu-west-1"});

const translate = new AWS.Translate();
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const SITE_TABLE = "Site-dg6n37kw5bezfgxg7zofsv3j4m-dev"

exports.handler = event => {
  
  for (const record of event.Records) {

    var params = {
      SourceLanguageCode: 'auto',
      TargetLanguageCode: 'en',
      //Text: `${record.dynamodb.NewImage.headline.S}`
      Text: `${record.dynamodb.NewImage.name.S} ### ${record.dynamodb.NewImage.headline.S} ### ${record.dynamodb.NewImage.description.S}`
    };
    
    translate.translateText(params, function (err, data) {
      if (err) {
        console.log(err, err.stack); 
        return Promise.resolve('Failed translating the record');
      }
      else    {

        let name_en = data['TranslatedText'].split("###")[0].trim()
        let headline_en = data['TranslatedText'].split("###")[1].trim()
        let description_en = data['TranslatedText'].split("###")[2].trim()
        //name
        let ExpressionAttributeValues = { ":name_en": name_en }
        let ExpressionAttributeNames = { "#name_en": "name_en"}
        let UpdateExpression = "SET #name_en = :name_en"

        //headline
        ExpressionAttributeValues[":headline_en"] = headline_en
        ExpressionAttributeNames["#headline_en"] = "headline_en"
        UpdateExpression += ", #headline_en = :headline_en"
        
        //description
        ExpressionAttributeValues[":description_en"] = description_en
        ExpressionAttributeNames["#description_en"] = "description_en"
        UpdateExpression += ", #description_en = :description_en"

        let params = {
          TableName: SITE_TABLE,
          ExpressionAttributeValues: ExpressionAttributeValues,
          ExpressionAttributeNames: ExpressionAttributeNames,
          UpdateExpression: UpdateExpression,
          ConditionExpression: "attribute_exists(id)",
          Key: { id: record.dynamodb.Keys.id.S}
        };

        dynamoDb.update(params, (err, data) => {

          if (err){
            console.log(err)
            return Promise.resolve('Failed to update headline');
          }
          return Promise.resolve('Successfully processed DynamoDB record');

        })
      }
    });
  }
};