// comps/allsites.js
//
// manage filtering logic

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { SitesFilter } from "./sitesfilter";
import { SitesList } from "./siteslist";

const Cities = require("../utils/Cities.json");

const FilterPeriodOptions = {
  1: {fr: " XIXe - XXIe siècle", values: ["xix", "xx", "xxi"] },
  2: {fr: " XVIe - XVIIIe siècle", values: ["xvi", "xvi", "xvii", "xviii"] },
  3: {fr: " XIe - XVe siècle", values: ["xi","xii","xiv","xiv","xv"] },
  4: {fr: " VIe - Xe siècle", values: ["vi","vii","viii","ix","x"] },
  5: {fr: " Ier - Ve siècle", values: ["v","iv","iii","ii","i"] },
  6: {fr: " Ve - Ier siècle avant JC", values: ["-v","-iv","-iii","-ii","-i"] },
  7: {fr: "< Ve siècle avant JC", values: ["<-V"] }
}

export const Allsites = ({ Sites }) => {
  
  const lang = useRouter().locale;
  const [filter, setFilter] = useState();
  const [sites, setSites] = useState(Sites);

  // functions
  const handleFilter = (f) => {
    let filt = { ...filter };
    filt[Object.keys(f)[0]] = f[Object.keys(f)[0]];
    setFilter(filt);

    return setSites(
      Sites.filter((x) => {
        if (filt.type && filt.type !== "") {
          return x.types.includes(filt.type);
        } else return true;
      }).filter((x) => {
        if (filt.periodOption && filt.periodOption !== "") {
          return FilterPeriodOptions[filt.periodOption].values.find(z => x.periods.includes(z));
        } else return true;
      })
    );
  };

  console.log(sites)


  return (
    <>
      <SitesFilter cb={(x) => handleFilter(x)} filter={filter} FilterPeriodOptions={FilterPeriodOptions} lang={lang} />
      <div
        style={{
          color: "black",
          backgroundColor: "white",
          padding: "10px 10px 10px",
          marginTop: 10,
          border: "1px solid #eee"
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "2rem", margin: 0}}>{Cities["beziers"][lang]}</h2>
      </div>
      <SitesList lang={lang} sites={sites} filter={filter} />
    </>
  );
};

export default Allsites;
