//./utils/dictionary.js

import { FaMosque } from "react-icons/fa";
import { FaChurch } from "react-icons/fa";
import { FaSynagogue } from "react-icons/fa";


export const Departments = {
    10: ["Occitanie","Aude"],
    34: [ "Occitanie", "Hérault"]
}

export const Keys = {
  fr: {
    address: "Adresse",
    all: "Toutes",
    book: "Réserver",
    bookNo: "Pas de réservation nécessaire",
    booking: "Réservation",
    bookingTemp: "Nous sommes en train de construire Patrimonia.",
    bookingTemp2: "Pour le moment, vous pouvez joindre",
    close: "Fermer",
    contact: "Contact",
    date: "Date",
    description: "Description",
    edition: "Edition",
    email: "Email",
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
    learnMore: "Plus d'information",
    links: "Liens utiles",
    makeARequest: "Faire une demande",
    meetingPoint: "Rendez-vous",
    nextDates: "Prochaines dates",
    noVisit: "Il n'y a pas de visite ou d'évènement connus pour ce site pour le moment",
    ok: "OK",
    onDemandDefault: "Les visites sont organisées sur demande. S'il vous plait, écrivez-nous pour plus d'information",
    onSiteDefault: "Les visites sont organisées directement sur place. Retrouvez nous aux horaires d'ouverture",
    opening: "Ouverture",
    openingHours: "Heures d'ouverture",
    organiser: "L'organisateur",
    persons: "Nombre de personnes",
    phone: "Téléphone",
    price: "Prix",
    pictures: "Photos",
    protection: "Protection",
    protections: "Protections",
    seeless: "Voir moins",
    seemore: "Voir plus",
    setNoDate: "Il ne semble pas y avoir de date pour cette visite. Contactez l'organisateur s'il vous plait",
    sites: "Sites",
    sitePageMaintainedBy: "Page maintenue par",
    siteTypes: "Types de sites",
    source: "Source",
    sources: "Sources",
    stars: "Etoiles",
    today: "Aujourd'hui",
    visits: "Visites",
    visitAudiences: "Pour qui",
    visitDuration: "Durée",
    visitFormat: "Format",
    visitTypes: "Types de visites",
    visitToldIn: "Visite proposée en",
    visitSubjects: "Sujets",
    visitProposedBy: "Visite organisée par",
    visitsDemand: "Visites sur demande",
    visitsEvent: "Visites évènement",
    visitsRegular: "Visites régulières",
    welcome: "Découvrir le patrimoine avec ses meilleurs guides",
    www: "Site internet",
    writeEmail: "Confirmez avec votre email",
    yourEmail: "Votre email ...",
    yourEmailWasSent: "Votre email a été envoyé"
  },
  en: {
    address: "Address",
    book: "Book",
    bookNo: "No booking. We'll see you there",
    booking: "Booking",
    bookingTemp: "We are currently building Patrimoinia.",
    bookingTemp2: "For the moment, you can reach",
    close: "Close",
    contact: "Details",
    date: "Date",
    description: "Description",
    edition: "Edition",
    email: "Email",
    filter: "Filter results",
    getInTouch: "Get in touch",
    guide: "Guide",
    guides: "Guides",
    guide: "Your guide",
    guides: "Your guides",
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
    learnMore: "Learn more",
    links: "Useful links",
    makeARequest: "Make a request",
    meetingPoint: "Meeting point",
    nextDates: "Next dates",
    noVisit: "There is no known visit or event for this site",
    ok: "OK",
    onDemandDefault: "Visits are organised on demand. Please get in touch for more information",
    onSiteDefault: "Visits are organised directly on site. Come by during opening hours",
    opening: "Opening",
    openingHours: "Opening hours",
    organiser: "The organiser",
    persons: "Number of people",
    phone: "Phone",
    pictures: "Pictures",
    price: "Price",
    protection: "Protection",
    protections: "Protections",
    seeless: "See less",
    setNoDate: "There does not seem to be any date for this visit. Please contact the organiser",
    stars: "Stars",
    seemore: "See more",
    sites: "Sites",
    sitePageMaintainedBy: "Page maintained by",
    siteTypes: "Site types",
    source: "Source",
    sources: "Sources",
    today: "Today",
    visitAudiences: "Pour qui",
    visitDuration: "Duration",
    visitFormat: "Format",
    visitProposedBy: "Visit proposed by",
    visitSubjects: "Themes",
    visitToldIn: "Visit offfered in",
    visitTypes: "Visit types",
    visits: "Visits",
    visitsDemand: "On demand tours",
    visitsEvent: "Special tours",
    visitsRegular: "Regular visits",
    writeEmail: "Confirm with your email",
    welcome: "Discover heritage with its best guides",
    www: "Website",
    yourEmail: "Your email ...",
    yourEmailWasSent: "Your email aws sent"
  }
}


export const Protections = {
  fr: {
    mh: "Monuments historiques"
  },
  en: {
    mh: "Monuments historiques"
  }
}

export const SiteMedia = ({lang, num}) => {
  if (lang === "fr") return <span>{num > 1 ? <span>{num} autres photos</span> : <span>Une autre photo</span>}</span>;
  //if (lang === "fr") return <span>{num} autres photos</span>;
  else return <span>{num > 1 ? <span>{num} other pictures</span> : <span>Another picture</span>}</span>;
}

export const TypeIcons = {
  religiousChristian: <FaChurch />,
  religiousJewish: <FaSynagogue />,
  religiousMuslim: <FaMosque />
}


export const VisitDonations = {
  fr: {
    donation: "Tout don au site est apprécié",
    tip: "Tout pourboire au guide est apprécié",
  },
  en: {
    donation: "All donations to the site are appreciated",
    tip: "All tips to the guide are appreciated",
  }
}


export const VisitMedia = ({lang, num}) => {
  if (lang === "fr") return <span>{num > 1 ? <span>{num} autres photos</span> : <span>Une autre photo</span>}</span>;
  //if (lang === "fr") return <span>{num} autres photos</span>;
  else return <span>{num > 1 ? <span>{num} other pictures</span> : <span>Another picture</span>}</span>;
}

export const WeekDays = {
  fr: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
}
