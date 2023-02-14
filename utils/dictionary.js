//./utils/dictionary.js


export const Departments = {
    10: ["Occitanie","Aude"],
    34: [ "Occitanie", "Hérault"]
}

export const DiscoFilter = {
  fr: {
    subject: "Sujet",
    type: "Type de découverte",
    who: "Pour qui?"
  },
  en: {
    subject: "Subject",
    type: "What it is",
    who: "For who"
  }
}


export const SiteMedia = ({lang, num}) => {
  if (lang === "en") return <span>{num > 1 ? <span>{num} other pictures</span> : <span>Another picture</span>}</span>;
  else return <span>{num > 1 ? <span>{num} autres photos</span> : <span>Une autre photo</span>}</span>;
}

export const DiscoMedia = ({lang, num}) => {
  if (lang === "en") return <span>{num > 1 ? <span>{num} other pictures</span> : <span>Another picture</span>}</span>;
  return <span>{num > 1 ? <span>{num} autres photos</span> : <span>Une autre photo</span>}</span>;
}
