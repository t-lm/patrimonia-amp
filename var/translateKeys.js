// ./buildKeysAsJson.js
// implementing aws-sdk v3

const fs = require('fs')
const {
  TranslateClient,
  TranslateTextCommand,
} = require("@aws-sdk/client-translate");

const REGION = "eu-west-1";

const Keys = {
  fr: {
    address: "Adresse",
    all: "tous",
    book: "Réserver",
    bookNo: "Pas de réservation nécessaire",
    booking: "réservation",
    Booking: "Réservation",
    bookingTemp: "Réservez directement sur:",
    close: "Fermer",
    contact: "Contact",
    date: "Date",
    description: "Description",
    disco: "Découverte",
    discos: "Découvertes",
    discos: "Découvertes",
    DiscosAroundBeziers: "DÉCOUVERTES À BÉZIERS ET AUTOUR",
    discoAudiences: "Pour qui",
    discoDuration: "Durée",
    discoFormat: "Format",
    discoTypes: "Types de découverte",
    discoToldIn: "Langue",
    discoSubjects: "Sujets",
    discoProposedBy: "Organisé par",
    discosDemand: "Sur demande",
    discosEvent: "Evènement",
    discosOpen: "Libres",
    discosOnDemand: "Visites sur demande",
    discosRegular: "Régulières",
    Discover: "Découvrir",
    DISCOVERIES: "DÉCOUVERTES",
    edition: "Edition",
    email: "Email",
    errorDiscoDelete:
      "La découverte n'a pas pu être supprimée. Merci de réessayer.",
    errorSiteDelete: "Le site n'a pas pu être supprimé. Merci de réessayer.",
    filter: "Filtrer les résultats",
    getInTouch: "Ecrivez-nous",
    guide: "Le guide",
    guides: "Les guides",
    guide: "Guide",
    guides: "Guides",
    here: "ici",
    keyEvent: "Evènement",
    keyEvents: "Evènements",
    keyFacts: "Fiche d'identité",
    keyPerson: "Personnage célèbre",
    keyPeople: "Personnage célèbres",
    keyPeriod: "Période",
    keyPeriods: "Périodes",
    keyStyle: "Style principal",
    keyStyles: "Styles",
    Language: "Langue",
    learnMore: "Plus d'information",
    links: "Aller plus loin",
    makeARequest: "Faire une demande",
    meetingPoint: "Rendez-vous",
    MYACCOUNT: "MON COMPTE",
    SIGNIN: "SE CONNECTER",
    SIGNOUT: "SE DECONNECTE",
    nextDates: "Prochaines dates",
    noDisco:
      "Il n'y a pas de visite ou d'évènement connus pour ce site pour le moment",
    ok: "OK",
    onDemandDefault:
      "Les visites sont organisées sur demande. S'il vous plait, écrivez-nous pour plus d'information",
    onSiteDefault:
      "Les visites sont organisées directement sur place. Retrouvez nous aux horaires d'ouverture",
    opening: "Ouverture",
    openingHours: "Heures d'ouverture",
    organiser: "L'organisateur",
    organisers: "Organisateurs",
    persons: "Nombre de personnes",
    phone: "Téléphone",
    price: "Prix",
    pictures: "Photos",
    protection: "Protection",
    protections: "Protections",
    remove: "Supprimer",
    seeless: "Voir moins",
    seemore: "Voir plus",
    setNoDate:
      "Il ne semble pas y avoir de date pour cette visite. Contactez l'organisateur s'il vous plait",
    sevendays: "7 jours",
    SITES: "SITES",
    sites: "Sites",
    sitePageMaintainedBy: "Page maintenue par",
    siteTypes: "Types de sites",
    source: "Source",
    sources: "Sources",
    stars: "Etoiles",
    today: "aujourd'hui",
    tomorrow: "demain",
    update: "Mettre à jour",
    welcome: "DÉCOUVREZ LE PATRIMOINE AUTOUR DE VOUS",
    www: "Site internet",
    writeEmail: "Confirmez avec votre email",
    yourEmail: "Votre email ...",
    yourEmailWasSent: "Votre email a été envoyé",
  },
  en: {
    address: "Address",
    all: "all",
    book: "Book",
    bookNo: "No booking. We'll see you there",
    booking: "booking",
    Booking: "Booking",
    bookingTemp: "Book directly here:",
    close: "Close",
    contact: "Details",
    date: "Date",
    description: "Description",
    disco: "Discovery",
    discos: "Discoveries",
    DiscosAroundBeziers: "DISCOVERIES IN BÉZIERS AND AROUND",
    discoAudiences: "Pour qui",
    discoDuration: "Duration",
    discoFormat: "Format",
    discoProposedBy: "Proposed by",
    discoSubjects: "Themes",
    discoToldIn: "Language",
    discoTypes: "Visit types",
    discos: "Visits",
    discosDemand: "On demand",
    discosEvent: "Events",
    discosOpen: "Open",
    discosOnDemand: "Visits on demand",
    discosRegular: "Regular",
    Discover: "Discover",
    DISCOVERIES: "DISCOVERIES",
    edition: "Edition",
    email: "Email",
    errorDiscoDelete: "The discovery could not be removed. Please try again.",
    errorSiteDelete: "The site could not be removed. Please try again.",
    filter: "Filter results",
    getInTouch: "Get in touch",
    guide: "Guide",
    guides: "Guides",
    here: "here",
    keyFacts: "Fiche d'identité",
    keyEvent: "Event",
    keyEvents: "Events",
    keyFacts: "Key facts",
    keyPerson: "Key person",
    keyPeople: "Key people",
    keyPeriod: "Period",
    keyPeriods: "Periods",
    keyStyle: "Main style",
    keyStyles: "Styles",
    Language: "Language",
    learnMore: "Learn more",
    links: "Useful links",
    makeARequest: "Make a request",
    meetingPoint: "Meeting point",
    MYACCOUNT: "MY ACCOUNT",
    nextDates: "Next dates",
    noDisco: "There is no known visit or event for this site",
    ok: "OK",
    onDemandDefault:
      "Visits are organised on demand. Please get in touch for more information",
    onSiteDefault:
      "Visits are organised directly on site. Come by during opening hours",
    opening: "Opening",
    openingHours: "Opening hours",
    organiser: "The organiser",
    organisers: "Organisers",
    persons: "Number of people",
    phone: "Phone",
    pictures: "Pictures",
    price: "Price",
    protection: "Protection",
    protections: "Protections",
    remove: "Remove",
    seeless: "See less",
    setNoDate:
      "There does not seem to be any date for this visit. Please contact the organiser",
    stars: "Stars",
    seemore: "See more",
    sevendays: "7 days",
    SIGNIN: "SIGN-IN",
    SIGNOUT: "SIGN-OUT",
    SITES: "SITES",
    sites: "Sites",
    sitePageMaintainedBy: "Page maintained by",
    siteTypes: "Site types",
    source: "Source",
    sources: "Sources",
    today: "today",
    tomorrow: "tomorrow",
    update: "Update",
    writeEmail: "Confirm with your email",
    welcome: "DISCOVER HERITAGE SITES AROUND YOU",
    www: "Website",
    yourEmail: "Your email ...",
    yourEmailWasSent: "Your email aws sent",
  },
};

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
  let promises = Object.keys(Keys["fr"]).map((x) => {
    return new Promise((resolve, reject) => {
      obj[x] = {};
      obj[x]["fr"] = Keys["fr"][x];
      obj[x]["en"] = Keys["en"][x];

      translate(Keys["fr"][x], "es")
      .then((data) => {
        obj[x]["es"] = data;
        translate(Keys["fr"][x], "de")
        .then((data) => {
          obj[x]["de"] = data;
          resolve(true)
        })
        .catch((err) => { console.log(err) });
      })
      .catch((err) => { console.log(err) });
    });
  });
  
  Promise.all(promises).then(() => {
    
    console.log(JSON.stringify(obj))
    //fs.writeFile("temp.json", JSON.stringify(obj));
  })

})();
