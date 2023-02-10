// ./comps/discolist.js

import React from "react";

import { DiscoPill } from "./discopill";
import { Keys } from "../utils/dictionary";

const LANG = "fr";

export const DiscosList = (props) => {
  const discos = props.discos;
  const filter = props.filter;

  return (
    <>
      {/* events */}
      {discos
        .filter((x) => x.type === "event")
        .sort((a, b) => (a.dates[0].start > b.dates[0].start ? 1 : -1))
        .map((d) => (
          <DiscoPill key={d.id} disco={d} filter={filter} />
        ))}

      {/* regular */}
      {discos
        .filter((x) => x.type === "regular")
        .map((d) => (
          <DiscoPill key={d.id} disco={d} filter={filter} />
        ))}

      {/* demand */}
      {discos
        .filter((x) => x.type === "demand")
        .map((d) => (
          <DiscoPill key={d.id} disco={d} filter={filter} />
        ))}
    </>
  );
};
