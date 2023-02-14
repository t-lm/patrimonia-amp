// ./translateJson.js
// implementing aws-sdk v3

//const Keys = require("../utils/Countries.json");
//const Keys = require("../utils/DiscoAudiences.json");
//const Keys = require("../utils/DiscoFormats.json");
//const Keys = require("../utils/DiscoLanguages.json");
//const Keys = require("../utils/DiscoPrices.json");
//const Keys = require("../utils/DiscoSubjects.json");
const Keys = require("../utils/DiscoTypes.json");

const LANG = "es"
const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");

const REGION = "eu-west-1";

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


(async () => {
  

  Object.values(Keys).forEach(x => {
    let text = x["fr"]
    translate(text, LANG)
    .then(data => console.log(`${text},"${LANG}": "${data}"`))
    .catch(err => console.log(err))  
  });
  
})();
