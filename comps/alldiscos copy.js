// comps/alldiscos.js
//
// filter stored in a state

import React, { useEffect, useState } from "react";

import { DiscosFilter } from "./discosfilter";
import { DiscosList } from "./discoslist";

const today = new Date().toISOString().slice(0, 10);
const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const Alldiscos = ({ Discos }) => {

  //const Discos = props.Discos
  console.log(Discos)

  let today = new Date();
  const todayString = today.toISOString().slice(0, 10)

  // state
  {/*}
  const [discos, setDiscos] = useState([]);
  const [filter, setFilter] = useState({periodType: "day", startPeriod: todayString, endPeriod: todayString});

  const updateFilter = (f) => {
    let fil = {...filter}
    Object.keys(f).forEach(x => {
      fil[x] = f[x]
    })
    setFilter(fil)
  }

  useEffect(() => {
    
    setDiscos(
      Discos
        .filter((x) => {
          if (filter.type && filter.type !== "") {
            return x.type === filter.type;
          } else return true;
        })
        .filter((x) => {
          if (filter.subject && filter.subject !== "") {
            return x.subjects.includes(filter.subject);
          } else return true;
        })
        .filter((x) => {
          if (filter.audience && filter.audience !== "") {
            return x.audiences.includes(filter.audience);
          } else return true;
        })
        .filter((x) => {
          if (filter.startPeriod && filter.startPeriod !== "") {
            return ( new Date(x.dateEnd) >= new Date(filter.startPeriod) );
          } else return true;
        })
        .filter((x) => {
          if (filter.endPeriod && filter.endPeriod !== "") {
            return ( new Date(x.dateStart) <= new Date(filter.endPeriod) );
          } else return true;
        })
        .filter((x) => {
          if (filter.periodType === "day" && x.type === "regular" && filter.startPeriod !== "") {
            let day = new Date(filter.startPeriod)
            let num = day.getDay() - 1 % 7
            if (x.openingHours[week[num]][0] && x.openingHours[week[num]][0] !== "") return true
            else return false
          } else return true;
        })
    )

  }, [Discos, filter]);
*/}
  //console.log(filter)

  return (

    <>

      <DiscosFilter filter={filter} cb={(x) => updateFilter(x) } />
      <DiscosList discos={discos} />

    </>
  );
};

export default Alldiscos;
