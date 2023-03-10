// ./comps/sitebasics.js

import utilStyles from "../styles/utils.module.css";

const Countries = require("../utils/Countries.json");
const SiteTypes = require("../utils/SiteTypes.json");
const { Icons } = require("../utils/icons");
const { Languages } = require("../utils/auth");

export const SiteBasics = (props) => {
  
  const site = props.site;
  const lang = props.lang

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 10,
        marginTop: 10,
        color: "black",
      }}
    >
      {/* site name */}
      <h1 style={{ marginBottom: 0 }} className={utilStyles.heading2Xl}>
        {site[Languages.includes(lang) ? `name_${lang}` : "name"]}
      </h1>

      {/* city */}
      <div
        style={{
          fontWeight: "bold",
          marginTop: 5,
          fontSize: "1.1rem",
        }}
      >
        {site.address.city}
        {" . "}
        <a
          style={{ color: "black" }}
          href={`https://www.google.com/maps/place/${encodeURIComponent(
            `${site.address.street},${site.address.postalCode} ${site.address.city} ${Countries["fr"][lang]}`
          )}`}
        >
          {site.address.street}, {site.address.postalCode} {site.address.city}, {Countries["fr"][lang]}
        </a>
      </div>

      {/* types */}
      <div
        style={{
          fontWeight: "bold",
          marginTop: 10,
          fontSize: "1.1rem",
        }}
      >
        {site.types &&
          site.types.map((t, i) => (
            <span
              key={i}
              style={{
                backgroundColor: "#e2e2d7",
                color: "black",
                padding: "3px 10px",
                borderRadius: 3,
              }}
            >
              <span style={{ marginRight: 10 }}>{SiteTypes[t][lang]}</span>
              <span>{Icons[t]}</span>
            </span>
          ))}
      </div>

      <h5 style={{ marginTop: 20, color: "#333" }}>
        {site[Languages.includes(lang) ? `headline_${lang}` : "headline"]}
      </h5>
    </div>
  );
};
