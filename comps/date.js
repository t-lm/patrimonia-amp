import { parseISO, format } from "date-fns";
import { en, enGB, fr, es, de, nl } from "date-fns/locale";
import { intervalToDuration } from "date-fns";
import { Languages } from "../utils/auth";

const Weekdays = require("../utils/Weekdays.json");

// unused
export const FormattedDate = ({ dateString, lang }) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d LLLL yyyy", { locale: [Languages].includes(lang) ? lang : fr })}
    </time>
  );
};

export const FormattedDateAndTime = ({ dateString, lang }) => {
  try {
    const date = parseISO(dateString);
    return format(date, "EEEE d LLLL yyyy, H:mm", { locale: lang === "fr" ? fr : enGB });
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
        case "fr":
          return <span>{`Ouvert ${verbose ? verbose : ""} entre ${slots[0][0]} et ${slots[0][1]}`}</span>
        case "en":
          return <span>{`Open ${verbose ? verbose : ""} between ${slots[0][0]} and ${slots[0][1]}`}</span>
        case "es":
          return <span>{`Abierto ${verbose ? verbose : ""} entre las ${slots[0][0]} y las ${slots[0][1]}`}</span>
        case "nl":
          return <span>{`${verbose ? verbose : ""} geopend tussen ${slots[0][0]} en ${slots[0][1]}`}</span>
        case "de":
          return <span>{`${verbose ? verbose : ""} von ${slots[0][0]} bis ${slots[0][1]} geöffnet`}</span>
      }
    }
    if (slots.length === 2) {
      switch(lang) {
        case "fr":
          return <span>{`Ouvert ${verbose ? verbose : ""} entre ${slots[0][0]} et ${slots[0][1]} et entre ${slots[1][0]} et ${slots[1][1]}`}</span>
        case "en": 
          return <span>{`Open ${verbose ? verbose : ""} between ${slots[0][0]} and ${slots[0][1]} and between ${slots[1][0]} and ${slots[1][1]}`}</span>
        case "es":
          return <span>{`Abierto ${verbose ? verbose : ""} entre las ${slots[0][0]} y las ${slots[0][1]} y entre las ${slots[1][0]} y las ${slots[1][1]}`}</span>
        case "nl":
          return <span>{`${verbose ? verbose : ""} geopend tussen ${slots[0][0]} en ${slots[0][1]} en tussen ${slots[1][0]} en ${slots[1][1]}`}</span>
        case "de":
          return <span>{`${verbose ? verbose : ""} von ${slots[0][0]} bis ${slots[0][1]} und von ${slots[1][0]} bis ${slots[1][1]} geöffnet`}</span>
      }
    }
    if (slots.length === 3) {
      switch(lang) {
        case "fr":
          return <span>{`Ouvert ${verbose ? verbose : ""} entre ${slots[0][0]} et ${slots[0][1]}, entre ${slots[1][0]} et ${slots[1][1]} et entre ${slots[2][0]} et ${slots[2][1]}`}</span>
        case "en": 
          return <span>{`Open ${verbose ? verbose : ""} between ${slots[0][0]} and ${slots[0][1]}, between ${slots[1][0]} and ${slots[1][1]} and between ${slots[2][0]} and ${slots[2][1]}`}</span>
        case "es":
          return <span>{`Abierto ${verbose ? verbose : ""} entre las ${slots[0][0]} y las ${slots[0][1]}, entre las ${slots[1][0]} y las ${slots[1][1]} y entre las ${slots[2][0]} y las ${slots[2][1]}`}</span>
        case "nl":
          return <span>{`${verbose ? verbose : ""} geopend tussen ${slots[0][0]} en ${slots[0][1]}, tussen ${slots[1][0]} en ${slots[1][1]} en tussen ${slots[2][0]} en ${slots[2][1]}`}</span>
        case "de":
          return <span>{`${verbose ? verbose : ""} von ${slots[0][0]} bis ${slots[0][1]}, von ${slots[1][0]} bis ${slots[1][1]} und von ${slots[2][0]} bis ${slots[2][1]} geöffnet`}</span>   
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
    const openDays = week.filter((x) => {
      return slots[x][0];
    });
    const closedDays = week.filter((x) => {
      return !slots[x][0];
    });

    if (openDays.length === 7) {
      if (lang === "fr") return <span>{`Ouvert tous les jours`}</span>;
      else return <span>{`Open every day`}</span>;
    } else if (openDays.length === 6) {
      if (lang === "fr")
        return (
          <span>{`Ouvert tous les jours sauf ${
            Weekdays[closedDays[0]][lang]
          }`}</span>
        );
      else
        return (
          <span>{`Open every day except ${
            Weekdays[closedDays[0]][lang]
          }`}</span>
        );
    } else if (openDays.length === 5) {
      if (lang === "fr")
        return (
          <span>{`Ouvert tous les jours sauf ${
            Weekdays[closedDays[0]][lang]
          } et ${Weekdays[closedDays[1]][lang]}`}</span>
        );
      else
        return (
          <span>{`Open every day except ${Weekdays[closedDays[0]][lang]} and ${
            Weekdays[closedDays[1]][lang]
          }`}</span>
        );
    } else if (openDays.length > 1) {
      if (lang === "fr")
        return (
          <span>{`Ouvert les ${openDays.map(
            (x) => ` ${Weekdays[x][lang]}`
          )}`}</span>
        );
      else
        return (
          <span>{`Open on ${openDays.map(
            (x) => ` ${Weekdays[x][lang]}`
          )}`}</span>
        );
    } else if (openDays.length == 1) {
      if (lang === "fr")
        return <span>{`Ouvert le ${Weekdays[openDays[0]][lang]}`}</span>;
      else return <span>{`Open on ${Weekdays[openDays[0]][lang]}`}</span>;
    }
  } catch (e) {
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
      if (lang === "fr") return (<span>{`Le ${format(start, "EEEE d LLLL yyyy", { locale: fr })} de ${format(start, "H:mm", { locale: fr })} à ${format(end,"H:mm",{ locale: fr })}`}</span>);
      else return (<span>{`${format(start, "EEEE d LLLL yyyy", { locale: enGB })} from ${format(start, "H:mm", { locale: enGB })} to ${format(end,"H:mm",{ locale: enGB })}`}</span>);
    } else if (dates.length > 1) {
      let multi =
        dates[0].start.slice(0, 7) !== dates.slice(-1)[0].start.slice(0, 7);
      let start = parseISO(dates[0].start);
      let end = parseISO(dates.slice(-1)[0].start);
      if (multi) {
        if (lang === "fr") {
        return (
          <span>{`Plusieurs dates entre ${format(start, "LLLL", {
            locale: fr,
          })} et ${format(end, "LLLL", { locale: fr })}`}</span>
        )}
        else return <span>{`Multiple dates between ${format(start, "LLLL", {
          locale: enGB,
        })} and ${format(end, "LLLL", { locale: enGB })}`}</span>
      } else {
      if (lang === "fr") {
        return (
          <span>{`Plusieurs dates en ${format(start, "LLLL", {
            locale: enGB,
          })}`}</span>
        )} else {
            return (
              <span>{`Multiple dates in ${format(start, "LLLL", {
                locale: enGB,
              })}`}</span>        
             )
      }
    }
  }
  } catch (e) {
    console.error(e);
    return <span></span>;
  }
};
