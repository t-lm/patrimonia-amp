import { parseISO, format } from "date-fns";
import { fr } from "date-fns/locale";
import { intervalToDuration } from "date-fns";

export const FormattedDate = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d LLLL yyyy", { locale: fr })}
    </time>
  );
};

export const FormattedDateAndTime = ({ dateString }) => {
  const date = parseISO(dateString);
  return format(date, "EEEE d LLLL yyyy, H:mm", { locale: fr });
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


export const FormattedSlots = ({
  slots, lang
}) => {
  if (slots.length === 1 ) {
    if (lang === "fr") return <span>{`Ouvert entre ${slots[0][0]} et ${slots[0][1]}`}</span>;
    else return <span>{`Open between ${slots[0]} and ${slots[1]}`}</span>;
  }
  if (slots.length === 2 ) {
    if (lang === "fr") return <span>{`Ouvert entre ${slots[0][0]} et ${slots[0][1]} et entre ${slots[1][0]} et ${slots[1][1]}`}</span>;
    else return <span>{`Open between ${slots[0][0]} and ${slots[0][1]} and between ${slots[1][0]} and ${slots[1][1]}`}</span>;
  }
  if (slots.length === 3 ) {
    if (lang === "fr") return <span>{`Ouvert entre ${slots[0][0]} et ${slots[0][1]}, entre ${slots[1][0]} et ${slots[1][1]} et entre ${slots[2][0]} et ${slots[2][1]}`}</span>;
    else return <span>{`Open between ${slots[0][0]} and ${slots[0][1]}, between ${slots[1][0]} and ${slots[1][1]} and between ${slots[2][0]} and ${slots[2][1]}`}</span>;
  }
};