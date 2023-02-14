// ./comps/sitedescription.js

import { Keys } from "../utils/dictionary";
const { Languages } = require("../utils/auth");

export const SiteDescription = (props) => {

  const site = props.site
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
      <h3 style={{ fontWeight: "bold" }}>{Keys[lang].description}</h3>
      <span style={{whiteSpace: "pre-line"}}> {site[Languages.includes(lang) ? `description_${lang}` : "description"]}</span>

    </div>
  );
};
