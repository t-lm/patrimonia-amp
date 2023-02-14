// ./updateItem.js

// implementing aws-sdk v3

const { DynamoDBClient, UpdateItemCommand } = require("@aws-sdk/client-dynamodb");

const REGION = "eu-west-1";

(async () => {
  const client = new DynamoDBClient({ region: REGION });

  let date = new Date().toISOString()
  let ExpressionAttributeValues = { ":updatedAt": { "S" : date }}
  let UpdateExpression = "SET #updatedAt = :updatedAt"
  let ExpressionAttributeNames = { "#updatedAt": "updatedAt"}

  let input = {
    TableName: "Site-dg6n37kw5bezfgxg7zofsv3j4m-dev",
    ExpressionAttributeValues,
    ExpressionAttributeNames,
    UpdateExpression,
    ConditionExpression: "attribute_exists(id)",
    Key: { id: { "S": "musee-fayet-beziers" }},
  };
  console.log(input)
  
  const command = new UpdateItemCommand(input);
  try {
    const response = await client.send(command);
    return response
  } catch (error) {
    console.log(error);
    return null
  }
  
})();
