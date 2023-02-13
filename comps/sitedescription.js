// ./comps/sitedescription.js

import { Keys } from "../utils/dictionary";


export const SiteDescription = (props) => {

  const description = props.site.description;
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
      <span style={{whiteSpace: "pre-line"}}>{description}</span>

    </div>
  );
};
