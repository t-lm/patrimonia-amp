// ./comps/discolist.js

import React from "react";

import { DiscoPill } from "./discopill";


export const DiscosList = (props) => {
  const discos = props.discos;
  const filter = props.filter;
  const lang = props.lang

  return (
    <>
      {/* regular */}
          {discos
        .filter((x) => x.type === "regular")
        .map((d) => (
          <DiscoPill lang={lang} key={d.id} disco={d} filter={filter} />
        ))}


      {/* events */}
      {discos
        .filter((x) => x.type === "event")
        .sort((a, b) => (a.dates[0].start > b.dates[0].start ? 1 : -1))
        .map((d) => (
          <DiscoPill lang={lang} key={d.id} disco={d} filter={filter} />
        ))}

      {/* demand */}
      {discos
        .filter((x) => x.type === "demand")
        .map((d) => (
          <DiscoPill lang={lang} key={d.id} disco={d} filter={filter} />
        ))}
    </>
  );
};
