// ./translateOrganisers.js
// implementing aws-sdk v3

const { DynamoDBClient, UpdateItemCommand, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");

const REGION = "eu-west-1";
const TABLE = "Organiser-dg6n37kw5bezfgxg7zofsv3j4m-dev"
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

const updateItem = async (obj) => {
  
  let ExpressionAttributeValues = { ":name": obj["name"] };
  let ExpressionAttributeNames = { "#name": "name" }
  let UpdateExpression = "SET #name = :name";

  let keys = ["description_en"]  
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

(async () => {
  //const client = new DynamoDBClient({ region: REGION });

  // scan
  let input = {
    TableName: TABLE,
    AttributesToGet: ["name", "description", "id"],
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
    translate(`${r.description.S}`, "en")
    .then(data => {
      let obj = {id: r.id, name: r.name, description_en: { "S" : data}}
      updateItem(obj)
      .then(res => { if(res) console.log(obj.id.S, "success")})
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))  
  });
  
})();
