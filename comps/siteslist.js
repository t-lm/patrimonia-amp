// ./comps/siteslist.js

import React from "react";

import { SitePill } from "./sitepill";

export const SitesList = (props) => {
  const sites = props.sites;
  const filter = props.filter;
  const lang = props.lang

  return (
    <>
          {sites.map((d) => ( <SitePill lang={lang} key={d.id} site={d} filter={filter} />
        ))}

    </>
  );
};
