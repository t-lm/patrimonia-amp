// ./buildKeysAsJson.js
// implementing aws-sdk v3


const {
  TranslateClient,
  TranslateTextCommand,
} = require("@aws-sdk/client-translate");
const REGION = "eu-west-1";
//const Keys = require("../utils/Countries.json");
//const Keys = require("../utils/DiscoAudiences.json");
//const Keys = require("../utils/DiscoFilter.json");
//const Keys = require("../utils/DiscoFormats.json");
//const Keys = require("../utils/DiscoLanguages.json");
//const Keys = require("../utils/DiscoPrices.json");
//const Keys = require("../utils/DiscoSubjects.json");
//const Keys = require("../utils/DiscoTypes.json");
//const Keys = require("../utils/Cities.json");
//const Keys = require("../utils/OrganiserTypes.json");
//const Keys = require("../utils/SiteFilter.json");
//const Keys = require("../utils/SitePeriods.json");
//const Keys = require("../utils/SiteProtections.json");
//const Keys = require("../utils/SiteStyles.json");
//const Keys = require("../utils/SiteTypes.json");
const Keys = require("../utils/Weekdays.json");


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
    return null;
  }
};

(() => {
  let obj = {};
  let promises = Object.keys(Keys).map((x) => {
    return new Promise((resolve, reject) => {
      obj[x] = Keys[x];
      translate(Keys[x]["fr"], "de")
      .then((data) => {
        obj[x]["de"] = data;
        translate(Keys[x]["fr"], "nl")
        .then((data) => {
            obj[x]["nl"] = data;
            translate(Keys[x]["fr"], "es")
            .then((data) => {
              obj[x]["es"] = data;
              resolve(true)
            })
            .catch((err) => { console.log(err) });
        })
        .catch((err) => { console.log(err) });
      })
      .catch((err) => { console.log(err) });
    });
  });
  
  Promise.all(promises).then(() => {  
    console.log(JSON.stringify(obj)) // then copied in json file
  })

})();
