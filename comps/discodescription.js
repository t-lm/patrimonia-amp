// ./comps/discodescription.js


const { Languages } = require("../utils/auth");
const Keys = require("../utils/Keys.json");

export const DiscoDescription = (props) => {

  const disco = props.disco;
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
      <h3 style={{ fontWeight: "bold" }}>{Keys.description[lang]}</h3>
      <span style={{whiteSpace: "pre-line"}}>{disco[Languages.includes(lang) ? `description_${lang}` : "description"]}</span>

    </div>
  );
};
