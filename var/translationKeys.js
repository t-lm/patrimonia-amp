// ./var/translateKeys.js

const Countries = require("../utils/Countries.json");
const DiscoAudiences = require("../utils/DiscoAudiences.json");
const DiscoFormats = require("../utils/DiscoFormats.json");
const DiscoLanguages = require("../utils/DiscoLanguages.json");
const DiscoPrices = require("../utils/DiscoPrices.json");

//Object.values(DiscoCountries).map(x => console.log(x["fr"]))
//Object.values(DiscoAudiences).map(x => console.log(x["fr"]))
//Object.values(DiscoFormats).map(x => console.log(x["fr"]))
//Object.values(DiscoLanguages).map(x => console.log(x["fr"]))
Object.values(DiscoPrices).map(x => console.log(x["fr"]))