import { parseISO, format } from "date-fns";
import { en, enGB, fr, es, de, nl } from "date-fns/locale";
import { intervalToDuration } from "date-fns";

const Weekdays = require("../utils/Weekdays.json");

// unused
export const FormattedDate = ({ dateString, lang }) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d LLLL yyyy", { locale: (lang === "en" ? enGB : (lang === "de" ? de : (lang === "nl" ? nl : (lang === "es" ? es : fr))))})}
    </time>
  );
};

export const FormattedDateAndTime = ({ dateString, lang }) => {
  try {
    const date = parseISO(dateString);
    return format(date, "EEEE d LLLL yyyy, H:mm", { locale: (lang === "en" ? enGB : (lang === "de" ? de : (lang === "nl" ? nl : (lang === "es" ? es : fr))))});
  } catch (e) {
    console.error(e);
    return "";
  }
};

export const FormattedMonth = ({ dateString, lang }) => {
  const date = parseISO(dateString);
  return format(date, "MMMM yy", { locale: lang === "fr" ? fr : enGB });
};

export const FormattedDuration = ({ dateStart, dateEnd }) => {
  const start = parseISO(dateStart);
  const end = parseISO(dateEnd);
  const duration = intervalToDuration({ start, end });
  return (
    <span>
      `${duration.minutes}:${duration.seconds}`
    </span>
  );
};

export const FormattedDurationFromMinutes = ({ minutes }) => {
  const duration = intervalToDuration({ start: 0, end: 60 * 1000 * minutes });
  const durationText =
    duration.hours > 0
      ? `${duration.hours}h${duration.minutes > 0 ? duration.minutes : ""}`
      : `${duration.minutes} minutes`;
  return <span>{durationText}</span>;
};

export const FormattedDurationFromMinutesInterval = ({
  minutesMin,
  minutesMax,
  lang,
}) => {
  const durationMin = intervalToDuration({
    start: 0,
    end: 60 * 1000 * minutesMin,
  });
  const durationMax = intervalToDuration({
    start: 0,
    end: 60 * 1000 * minutesMax,
  });
  const durationMinText =
    durationMin.hours > 0
      ? `${durationMin.hours}h${
          durationMin.minutes > 0 ? durationMin.minutes : ""
        }`
      : `${durationMin.minutes} minutes`;
  const durationMaxText =
    durationMax.hours > 0
      ? `${durationMax.hours}h${
          durationMax.minutes > 0 ? durationMax.minutes : ""
        }`
      : `${durationMax.minutes} minutes`;
  if (lang === "fr")
    return <span>{`Entre ${durationMinText} et ${durationMaxText}`}</span>;
  return <span>{`Between ${durationMinText} and ${durationMaxText}`}</span>;
};

export const FormattedLength = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d LLLL yyyy, H:mm", { locale: lang === "fr" ? fr : enGB })}
    </time>
  );
};

export const FormattedDaySlots = ({ slots, lang, verbose }) => {
  try {
    if (slots.length === 1) {
      switch(lang) {
        case "en":
          return <span>{`Open ${verbose ? verbose : ""} between ${slots[0][0]} and ${slots[0][1]}`}</span>
        case "es":
          return <span>{`Abierto ${verbose ? verbose : ""} entre las ${slots[0][0]} y las ${slots[0][1]}`}</span>
        case "nl":
          return <span>{`${verbose ? verbose : ""} geopend tussen ${slots[0][0]} en ${slots[0][1]}`}</span>
        case "de":
          return <span>{`${verbose ? verbose : ""} von ${slots[0][0]} bis ${slots[0][1]} geöffnet`}</span>
        default:
          return <span>{`Ouvert ${verbose ? verbose : ""} entre ${slots[0][0]} et ${slots[0][1]}`}</span>
      }
    }
    if (slots.length === 2) {
      switch(lang) {
        case "en": 
          return <span>{`Open ${verbose ? verbose : ""} between ${slots[0][0]} and ${slots[0][1]} and between ${slots[1][0]} and ${slots[1][1]}`}</span>
        case "es":
          return <span>{`Abierto ${verbose ? verbose : ""} entre las ${slots[0][0]} y las ${slots[0][1]} y entre las ${slots[1][0]} y las ${slots[1][1]}`}</span>
        case "nl":
          return <span>{`${verbose ? verbose : ""} geopend tussen ${slots[0][0]} en ${slots[0][1]} en tussen ${slots[1][0]} en ${slots[1][1]}`}</span>
        case "de":
          return <span>{`${verbose ? verbose : ""} von ${slots[0][0]} bis ${slots[0][1]} und von ${slots[1][0]} bis ${slots[1][1]} geöffnet`}</span>
        default:
          return <span>{`Ouvert ${verbose ? verbose : ""} entre ${slots[0][0]} et ${slots[0][1]} et entre ${slots[1][0]} et ${slots[1][1]}`}</span>
      }
    }
    if (slots.length === 3) {
      switch(lang) {
        case "en": 
          return <span>{`Open ${verbose ? verbose : ""} between ${slots[0][0]} and ${slots[0][1]}, between ${slots[1][0]} and ${slots[1][1]} and between ${slots[2][0]} and ${slots[2][1]}`}</span>
        case "es":
          return <span>{`Abierto ${verbose ? verbose : ""} entre las ${slots[0][0]} y las ${slots[0][1]}, entre las ${slots[1][0]} y las ${slots[1][1]} y entre las ${slots[2][0]} y las ${slots[2][1]}`}</span>
        case "nl":
          return <span>{`${verbose ? verbose : ""} geopend tussen ${slots[0][0]} en ${slots[0][1]}, tussen ${slots[1][0]} en ${slots[1][1]} en tussen ${slots[2][0]} en ${slots[2][1]}`}</span>
        case "de":
          return <span>{`${verbose ? verbose : ""} von ${slots[0][0]} bis ${slots[0][1]}, von ${slots[1][0]} bis ${slots[1][1]} und von ${slots[2][0]} bis ${slots[2][1]} geöffnet`}</span>   
        default:
          return <span>{`Ouvert ${verbose ? verbose : ""} entre ${slots[0][0]} et ${slots[0][1]}, entre ${slots[1][0]} et ${slots[1][1]} et entre ${slots[2][0]} et ${slots[2][1]}`}</span>
    }
  }
  } catch (e) {
    console.log(e);
    return <span></span>;
  }
};

export const FormattedDays = ({ slots, lang }) => {
  try {
    const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const openDays = week.filter((x) => { return slots[x][0]});
    const closedDays = week.filter((x) => { return !slots[x][0]; });

    if (openDays.length === 7) {
      switch (lang) {
        case "en": 
          return <span>Open every day</span>;
        case "es":
          return <span>Abierto todos los dias</span>
        case "nl":
          return <span>Elke dag geopend</span>
        case "de":
          return <span>Jeden Tag geöffnet</span>   
        default: 
          return <span>Ouvert tous les jours</span>;
    } 
  } else if (openDays.length === 6) {
      switch (lang) {
        case "en": 
        return  <span>{`Open every day except ${Weekdays[closedDays[0]][lang]}`}</span>;
      case "es":
        return <span>{`Abierto todos los dias excepto el ${Weekdays[closedDays[0]][lang]}`}</span>
      case "nl":
        return <span>{`Elke dag geopend behalve ${Weekdays[closedDays[0]][lang]}`}</span>
      case "de":
        return <span>{`Täglich außer ${Weekdays[closedDays[0]][lang]} geöffnet`}</span>   
      default: 
        return <span>{`Ouvert tous les jours sauf ${Weekdays[closedDays[0]][lang]}`}</span>
    } 
  }
    else if (openDays.length === 5) {
      switch (lang) {
        case "en": 
        return  <span>{`Open every day except ${Weekdays[closedDays[0]][lang]} and ${Weekdays[closedDays[1]][lang]}`}</span>;
      case "es":
        return <span>{`Abierto todos los dias excepto el ${Weekdays[closedDays[0]][lang]} y el el ${Weekdays[closedDays[1]][lang]}`}</span>
      case "nl":
        return <span>{`Elke dag geopend behalve ${Weekdays[closedDays[0]][lang]} en ${Weekdays[closedDays[1]][lang]}`}</span>
      case "de":
        return <span>{`Täglich außer ${Weekdays[closedDays[0]][lang]} und ${Weekdays[closedDays[1]][lang]} geöffnet`}</span>   
      default: 
        return <span>{`Ouvert tous les jours sauf ${Weekdays[closedDays[0]][lang]} et ${Weekdays[closedDays[1]][lang]}`}</span>
    } 
    } else if (openDays.length > 1) {
      switch (lang) {
        case "en": 
          return <span>{`Open on ${openDays.map((x) => ` ${Weekdays[x][lang]}`)}`}</span>
        case "es":
          return <span>{`Abierto los ${openDays.map((x) => ` ${Weekdays[x][lang]}`)}`}</span>
        case "nl":
          return <span>{`Geopend op ${openDays.map((x) => ` ${Weekdays[x][lang]}`)}`}</span>
        case "de":
          return <span>{`Geöffnet am ${openDays.map((x) => ` ${Weekdays[x][lang]}`)}`}</span> 
        default: 
          return <span>{`Ouvert les ${openDays.map((x) => ` ${Weekdays[x][lang]}`)}`}</span>
    } }
    else if (openDays.length == 1) {
      switch (lang) {
        case "en": 
          return <span>{`Open on ${Weekdays[openDays[0]][lang]}`}</span>;
        case "es":
          return <span>{`Abierto el ${Weekdays[openDays[0]][lang]}`}</span>
        case "nl":
          return <span>{`${Weekdays[openDays[0]][lang]} geopend`}</span>
        case "de":
          return <span>{`Am ${Weekdays[openDays[0]][lang]} geöffnet`}</span> 
        default:
          return <span>{`Ouvert le ${Weekdays[openDays[0]][lang]}`}</span>;
    }
  } }
  catch (e) {
    console.log(e);
    return <span></span>;
  }
};

export const FormattedEventDates = ({ dates, lang }) => {
  // dates needs to be filtered here
  try {

    if (dates.length === 1) {
      let start = parseISO(dates[0].start);
      let end = parseISO(dates[0].end);
      switch(lang) {
        case "en": 
          return (<span>{`${format(start, "EEEE d LLLL yyyy", { locale: enGB })} from ${format(start, "H:mm", { locale: enGB })} to ${format(end,"H:mm",{ locale: enGB })}`}</span>);
        case "de": 
          return (<span>{`${format(start, "EEEE d LLLL yyyy", { locale: de })} zwischen ${format(start, "H:mm", { locale: de })} und ${format(end,"H:mm",{ locale: de })}`}</span>);
        case "es": 
          return (<span>{`${format(start, "EEEE d LLLL yyyy", { locale: es })} entre ${format(start, "H:mm", { locale: es })} y ${format(end,"H:mm",{ locale: enGB })}`}</span>);
        case "nl": 
          return (<span>{`${format(start, "EEEE d LLLL yyyy", { locale: nl })} tussen ${format(start, "H:mm", { locale: nl })} en ${format(end,"H:mm",{ locale: nl })}`}</span>);
        default:
          return (<span>{`Le ${format(start, "EEEE d LLLL yyyy", { locale: fr })} de ${format(start, "H:mm", { locale: fr })} à ${format(end,"H:mm",{ locale: fr })}`}</span>);
        }
    } 
    
    else if (dates.length > 1) {
      let multi =
        dates[0].start.slice(0, 7) !== dates.slice(-1)[0].start.slice(0, 7);
      let start = parseISO(dates[0].start);
      let end = parseISO(dates.slice(-1)[0].start);

      if (multi) {

        switch(lang) {
          case "en": 
            return <span>{`Multiple dates between ${format(start, "LLLL", { locale: enGB, })} and ${format(end, "LLLL", { locale: enGB })}`}</span>
          case "de": 
            return <span>{`Mehrere Termine zwischen ${format(start, "LLLL", { locale: de, })} und ${format(end, "LLLL", { locale: de })}`}</span>
          case "es": 
            return <span>{`Varias fechas entre ${format(start, "LLLL", { locale: es, })} y ${format(end, "LLLL", { locale: es })}`}</span>
          case "nl": 
            return <span>{`Meerdere data tussen ${format(start, "LLLL", { locale: nl, })} en ${format(end, "LLLL", { locale: nl })}`}</span>
          default:
            return <span>{`Plusieurs dates entre ${format(start, "LLLL", { locale: fr, })} et ${format(end, "LLLL", { locale: fr })}`}</span>
          }

      } else {

        switch(lang) {
          case "en": 
            return <span>{`Multiple dates in ${format(start, "LLLL", { locale: enGB})}`}</span>        
          case "de": 
            return <span>{`Mehrere Termine im ${format(start, "LLLL", { locale: de })}`}</span>
          case "es": 
            return <span>{`Varias fechas en ${format(start, "LLLL", { locale: es })}`}</span>
          case "nl": 
            return <span>{`Meerdere data in ${format(start, "LLLL", { locale: nl })}`}</span>
          default:
            return <span>{`Plusieurs dates en ${format(start, "LLLL", { locale: fr })}`}</span>
          }
      }
    }
    
  }
  catch (e) {
    console.error(e);
    return <span></span>;
  }
};
