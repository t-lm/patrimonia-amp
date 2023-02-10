// ./comps/sitelinks.js

import React from "react";

const LANG = "fr";

export const SiteLinks = (props) => {

  const links = props.site.links;

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
            l[LANG] && (
              <li key={i}>
                <a href={l.link}>{l[LANG]}</a>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
