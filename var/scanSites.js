// ./translateSites.js
// implementing aws-sdk v3

const { DynamoDBClient, UpdateItemCommand, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");

const REGION = "eu-west-1";
const client = new DynamoDBClient({ region: REGION });



(async () => {
  
  // scan
  let input = {
    TableName: "Site-dg6n37kw5bezfgxg7zofsv3j4m-dev",
    AttributesToGet: ["name", "description", "headline", "id", "links"],
  };
  const command = new ScanCommand(input);
  let results;
  try {
    results = await client.send(command);
  } catch (err) {
    console.error(err);
  }
  
  // loop
  results.Items.forEach((r) => {
    try {
      console.log(r.id.S, r.links.L)
    }
    catch(err) {
      console.log("no links", r.id.S) 
    }
  })
    

})();
