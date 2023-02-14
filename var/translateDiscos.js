// ./translateOrganisers.js
// implementing aws-sdk v3

const { DynamoDBClient, UpdateItemCommand, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");

const REGION = "eu-west-1";
const TABLE = "Disco-dg6n37kw5bezfgxg7zofsv3j4m-dev"
const lang = "de"
const keys = ["name", "headline", "description", "practicalInfo", "priceCommentary", "demandCommentary"]

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
  
  let ExpressionAttributeValues = { ":name": obj["name"] };
  let ExpressionAttributeNames = { "#name": "name" }
  let UpdateExpression = "SET #name = :name";
  
  keys.forEach((x) => {
    if (Object.keys(obj).includes(`${x}_${lang}`)) {
      ExpressionAttributeValues[`:${x}_${lang}`] = obj[`:${x}_${lang}`];
      ExpressionAttributeNames[`#${x}_${lang}`] = `${x}_${lang}`;
      UpdateExpression += `, #${x}_${lang} = :${x}_${lang}`;
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
    
    let obj = {  id: r.id, name: r.name }
    let promises = keys.map((x) => {
      console.log(x, r[x])
      return new Promise((resolve, reject) => {
        if (Object.keys(r).includes(x) && typeof(r[x]) === "string") { 
          translate(r[x]["S"])
          .then(data => {
            obj[`${x}_${lang}`] = data
            resolve(true)
          })
          .catch(err => console.log(err))
        } else resolve(true)
      });
    });

    Promise.all(promises).then(() => {
      console.log(obj)
      updateItem(obj)
      .then(res => { if(res) console.log("success")})
      .catch(err => console.log(err))
    })
    
  });
  
})();
