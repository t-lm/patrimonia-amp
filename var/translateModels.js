// ./translateModels.js
// 
// local function to translate remote dynamo db models 
// implemented with promises and aws-sdk v3
// only apply to string keys

const { DynamoDBClient, UpdateItemCommand, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");

const MODEL = "Disco"
//const keys = ["name", "description", "headline"]
const keys = ["name", "description", "headline", "practicalInfo", "demandCommentary", "priceCommentary"]
const REGION = "eu-west-1";
const TABLE = `${MODEL}-dg6n37kw5bezfgxg7zofsv3j4m-dev`
const lang = "es"

const client = new DynamoDBClient({ region: REGION });

const translate = async (text) => {
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
  
  let ExpressionAttributeValues = {};
  let ExpressionAttributeNames = {}
  let UpdateExpression = ""
  
  keys.forEach((x, i) => {
    if (Object.keys(obj).includes(`${x}_${lang}`)) {
      ExpressionAttributeValues[`:${x}_${lang}`] = obj[`${x}_${lang}`];
      ExpressionAttributeNames[`#${x}_${lang}`] = `${x}_${lang}`;
      UpdateExpression += (i === 0) ? `SET #${x}_${lang} = :${x}_${lang}` : `, #${x}_${lang} = :${x}_${lang}`;
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
    AttributesToGet: [...keys, "id"]
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

    let obj = {  id: r.id }
    let promises = keys.map((x) => {
      return new Promise((resolve) => {
        if (Object.keys(r).includes(x) && typeof(r[x]) === "object" && r[x]["S"]) { 
          translate(r[x]["S"])
          .then(data => {
            obj[`${x}_${lang}`] = {"S" : data}
            resolve(true)
          })
          .catch(err => console.log(err))
        } else resolve(true)
      });
    });

    Promise.all(promises).then(() => {
      
      updateItem(obj)
      .then(res => { if(res) console.log(obj["id"]["S"], "success")})
      .catch(err => console.log(err))
    })
    
  });
  
})();
