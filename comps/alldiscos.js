// comps/alldiscos.js
//
// manage filtering logic

import React, { useEffect, useState } from "react";

import { DiscosFilter } from "./discosfilter";
import { DiscosList } from "./discoslist";

const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export const Alldiscos = ({ Discos }) => {

  let today = new Date();
  const todayString = today.toISOString().slice(0, 10)

  const [discos, setDiscos] = useState([]);
  const [filter, setFilter] = useState({periodRange: "today", startPeriod: todayString, endPeriod: todayString});

  const updateFilter = (f) => {
    let fil = {...filter}
    Object.keys(f).forEach(x => { fil[x] = f[x] })
    setFilter(fil)
  }

  useEffect(() => {
    
    setDiscos(
      Discos
        .filter((x) => (filter.type && filter.type !== "") ? x.type === filter.type : true )
        .filter((x) => (filter.subject && filter.subject !== "") ? x.subjects.includes(filter.subject) : true)
        .filter((x) => (filter.audience && filter.audience !== "") ? x.audiences.includes(filter.audience) : true)
        // filter out discos before start period
        .filter((x) => filter.startPeriod !== "" ? new Date(x.dateEnd) >= new Date(filter.startPeriod) : true)
        // filter out discos after end period
        .filter((x) => filter.endPeriod !== "" ? new Date(x.dateStart) <= new Date(filter.endPeriod) : true)
        // filter out on demand discos for today
        .filter((x) => (filter.periodRange === "today" && x.type === "demand") ? false : true)
        // filter out regular discos not open today or tomorrow
        .filter((x) => {
          if (["today", "tomorrow"].includes(filter.periodRange) && x.type === "regular" && filter.startPeriod !== "") {
            let day = new Date(filter.startPeriod)
            let num = day.getDay()
            if (x.openingHours[week[num]][0] && x.openingHours[week[num]][0] !== "") return true
            else return false
          } else return true;
        })
    )

  }, [Discos, filter]);


  return (
    <>
    <DiscosFilter filter={filter} cb={(x) => updateFilter(x) } />
    <DiscosList discos={discos} filter={filter} />
  </>
  );
};

export default Alldiscos;
