// ./comps/sitelinks.js

import React from "react";

const lang = "fr";

export const SiteLinks = (props) => {

  const links = props.site.links;
  const lang = props.lang
  
  return (
    <div
      style={{
        marginTop: 20,
        backgroundColor: "white",
        padding: 10,
        color: "black" 
      }}
    >
      <h3 style={{ fontWeight: "bold" }}>Aller plus loin</h3>
      <ul>
        {links.map(
          (l,i) =>
            l[lang] && (
              <li key={i}>
                <a style={{color: "black"}} href={l.www} target="_blank">{l[lang]}</a>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
