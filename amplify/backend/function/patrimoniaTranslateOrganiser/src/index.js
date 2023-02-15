/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");
const { DynamoDBClient, UpdateItemCommand } = require("@aws-sdk/client-dynamodb");
const REGION = "eu-west-1";
const TABLE = "Organiser-dg6n37kw5bezfgxg7zofsv3j4m-dev"
const keys = ["description"]
const languages = ["de", "nl", "es", "en"] 

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
  
  let ExpressionAttributeValues = {};
  let ExpressionAttributeNames = {}
  let UpdateExpression = ""
  
  languages.forEach((lang, j) => {
    keys.forEach((x, i) => {
      if (Object.keys(obj).includes(`${x}_${lang}`)) {
        ExpressionAttributeValues[`:${x}_${lang}`] = obj[`${x}_${lang}`];
        ExpressionAttributeNames[`#${x}_${lang}`] = `${x}_${lang}`;
        UpdateExpression += (i === 0 && j === 0) ? `SET #${x}_${lang} = :${x}_${lang}` : `, #${x}_${lang} = :${x}_${lang}`;
      }
    })
  })

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
  
      let obj = {  id: r.dynamodb.Keys.id }
      let promises = keys.map((x) => {
        return new Promise((resolve) => {
          if (Object.keys(r.dynamodb.NewImage).includes(x) && typeof(r.dynamodb.NewImage[x]) === "object" && r.dynamodb.NewImage[x]["S"]) { 
            translate(r.dynamodb.NewImage[x]["S"], "en")
            .then(data => {
              obj[`${x}_en`] = {"S" : data}
              translate(r.dynamodb.NewImage[x]["S"], "es")
              .then(data => {
                obj[`${x}_es`] = {"S" : data}
                translate(r.dynamodb.NewImage[x]["S"], "de")
                .then(data => {
                  obj[`${x}_de`] = {"S" : data}
                  translate(r.dynamodb.NewImage[x]["S"], "nl")
                  .then(data => {
                    obj[`${x}_nl`] = {"S" : data}
                    resolve(true)
                  })
                  .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
              })
              .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
          } else resolve(true)
        });
      });
  
      Promise.all(promises).then(() => {
        
        update(obj)
        .then(res => { if(res) console.log(obj["id"]["S"], "success")})
        .catch(err => console.log(err))
      })
      
    }

}
