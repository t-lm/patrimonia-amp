// ./translateOrganisers.js
// implementing aws-sdk v3

const { DynamoDBClient, UpdateItemCommand, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");

const REGION = "eu-west-1";
const TABLE = "Disco-dg6n37kw5bezfgxg7zofsv3j4m-dev"
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

  let keys = ["name_en", "headline_en", "description_en", "practicalInfo_en", "priceCommentary_en", "demandCommentary_en"]  
  keys.forEach((x) => {
    if (x in obj) {
      ExpressionAttributeValues[`:${x}`] = obj[x];
      ExpressionAttributeNames[`#${x}`] = x;
      UpdateExpression += `, #${x} = :${x}`;
    }
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
  
  // scan
  let input = {
    TableName: TABLE,
    AttributesToGet: ["name", "headline", "description", "id", "practicalInfo", "priceCommentary", "demandCommentary"],
  };
  const command = new ScanCommand(input);
  let results;
  try {
    results = await client.send(command);
  } catch (err) {
    console.error(err);
  }
  
  // loop
  results.Items.slice(0,3).forEach((r) => {
    console.log("starting", r.id.S)
    let text = `${r.name.S} ### ${r.headline.S} ### ${"description" in r ? r.description.S : " "} ### ${"practicalInfo" in r  ? r.practicalInfo.S : " "} ### ${"priceCommentary" in r ? r.priceCommentary.S : " "} ### ${"demandCommentary" in r ? r.demandCommentary.S : " "} ###`
    console.log(text)
    translate(text, "en")
    .then(data => {
      console.log(data.split("###"), data.split("###").length)
      let obj = {
        id: r.id, 
        name: r.name, 
        name_en: { "S" : data.split("###")[0].trim()}, 
        headline_en: { "S" : data.split("###")[1].trim()}, 
        description_en: { "S" : data.split("###")[2].trim()}, 
        practicalInfo_en: { "S" : data.split("###")[3].trim()},
        priceCommentary_en: { "S" : data.split("###")[4].trim()},
        demandCommentary_en: { "S" : data.split("###")[5].trim()}
      }
      updateItem(obj)
      .then(res => { if(res) console.log(obj.id.S, "success")})
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))  
  });
  
})();
