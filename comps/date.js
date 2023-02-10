import { parseISO, format } from "date-fns";
import { fr } from "date-fns/locale";
import { intervalToDuration } from "date-fns";

const Weekdays = require("../utils/Weekdays.json");

export const FormattedDate = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d LLLL yyyy", { locale: fr })}
    </time>
  );
};

export const FormattedDateAndTime = ({ dateString }) => {
  try {
  const date = parseISO(dateString);
  return format(date, "EEEE d LLLL yyyy, H:mm", { locale: fr });
  }
  catch(e) {
    console.error(e)
    return ''
  }
};

export const FormattedMonth = ({ dateString }) => {
  const date = parseISO(dateString);
  return format(date, "MMMM yy", { locale: fr });
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
      ? `${durationMin.hours}h${durationMin.minutes > 0 ? durationMin.minutes : ""}`
      : `${durationMin.minutes} minutes`;
  const durationMaxText =
    durationMax.hours > 0
      ? `${durationMax.hours}h${durationMax.minutes > 0 ? durationMax.minutes : ""}`
      : `${durationMax.minutes} minutes`;
  if (lang === "fr")
    return <span>{`Entre ${durationMinText} et ${durationMaxText}`}</span>;
  return <span>{`Between ${durationMinText} and ${durationMaxText}`}</span>;
};

export const FormattedLength = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d LLLL yyyy, H:mm", { locale: fr })}
    </time>
  );
};


export const FormattedDaySlots = ({
  slots, lang, verbose
}) => {
  if (slots.length === 1 ) {
    if (lang === "fr") return <span>{`Ouvert ${verbose ? verbose : ""} entre ${slots[0][0]} et ${slots[0][1]}`}</span>;
    else return <span>{`Open ${verbose ? verbose : ""} between ${slots[0]} and ${slots[1]}`}</span>;
  }
  if (slots.length === 2 ) {
    if (lang === "fr") return <span>{`Ouvert ${verbose ? verbose : ""} entre ${slots[0][0]} et ${slots[0][1]} et entre ${slots[1][0]} et ${slots[1][1]}`}</span>;
    else return <span>{`Open ${verbose ? verbose : ""} between ${slots[0][0]} and ${slots[0][1]} and between ${slots[1][0]} and ${slots[1][1]}`}</span>;
  }
  if (slots.length === 3 ) {
    if (lang === "fr") return <span>{`Ouvert ${verbose ? verbose : ""} entre ${slots[0][0]} et ${slots[0][1]}, entre ${slots[1][0]} et ${slots[1][1]} et entre ${slots[2][0]} et ${slots[2][1]}`}</span>;
    else return <span>{`Open ${verbose ? verbose : ""} between ${slots[0][0]} and ${slots[0][1]}, between ${slots[1][0]} and ${slots[1][1]} and between ${slots[2][0]} and ${slots[2][1]}`}</span>;
  }
};

export const FormattedDays = ({ slots, lang }) => {
  const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const openDays = week.filter(x => {return slots[x][0]})
  const closedDays =  week.filter(x => {return !slots[x][0]})

  if (openDays.length === 7) {
    if (lang === "fr") return <span>{`Ouvert tous les jours`}</span>;
    else return <span>{`Open every day`}</span>;
  }
  else if (openDays.length === 6) {
    if (lang === "fr") return <span>{`Ouvert tous les jours sauf ${Weekdays[closedDays[0]][lang]}`}</span>;
    else return <span>{`Open every day except ${Weekdays[closedDays[0]][lang]}`}</span>;
  }
  else if (openDays.length === 5) {
    if (lang === "fr") return <span>{`Ouvert tous les jours sauf ${Weekdays[closedDays[0]][lang]} et ${Weekdays[closedDays[1]][lang]}`}</span>;
    else return <span>{`Open every day except ${Weekdays[closedDays[0]][lang]} and ${Weekdays[closedDays[1]][lang]}`}</span>;
  }
  else if (openDays.length > 1) {
    if (lang === "fr") return <span>{`Ouvert les ${openDays.map(x => ` ${Weekdays[x][lang]}`)}`}</span>;
    else return <span>{`Open on ${openDays.map(x => ` ${Weekdays[x][lang]}`)}`}</span>;
  }
  else if (openDays.length == 1) {
    if (lang === "fr") return <span>{`Ouvert le ${Weekdays[openDays[0]][lang]}`}</span>;
    else return <span>{`Open on ${Weekdays[openDays[0]][lang]}`}</span>;
  }

};

export const FormattedEventDates = ({ dates, lang }) => {
  // dates needs to be filtered here
  try{
  if (dates.length === 1) {
    let start = parseISO(dates[0].start);
    let end = parseISO(dates[0].end);
    if (lang === "fr") return <span>{`Le ${format(start, "EEEE d LLLL yyyy", { locale: fr })} de ${format(start, "H:mm", { locale: fr })} à ${format(end, "H:mm", { locale: fr })}`}</span>;
    else return <span>{`Single date on ${format(start, "EEEE d LLLL yyyy at H:mm")}`}</span>;
  }
  else if (dates.length > 1) {
    let multi = (dates[0].start.slice(0,7) !== dates.slice(-1)[0].start.slice(0,7))
    let start = parseISO(dates[0].start);
    let end = parseISO(dates.slice(-1)[0].start);
    if (multi) {
      return <span>{`Plusieurs dates entre ${format(start, "LLLL", { locale: fr })} et ${format(end, "LLLL", { locale: fr })}`}</span>;
    }
    else return <span>{`Plusieurs dates en ${format(start, "LLLL", { locale: fr })}`}</span>;
  }
}
catch (e) {
  console.error(e)
  return <span></span>
}

};