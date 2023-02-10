// ./comps/discodescription.js


import { Keys } from "../utils/dictionary";
const LANG = "fr";

export const DiscoDescription = (props) => {

  const description = props.disco.description;
  
  return (
    <div
        style={{
          marginTop: 20,
          backgroundColor: "white",
          padding: 10,
          color: "black" 
        }}
        >
      <h3 style={{ fontWeight: "bold" }}>{Keys[LANG].description}</h3>
      <span style={{whiteSpace: "pre-line"}}>{description}</span>

    </div>
  );
};
