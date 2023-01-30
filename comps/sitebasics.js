// ./comps/sitebasics.js

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import utilStyles from "../styles/utils.module.css";

const LANG = "fr";
const Countries = require("../utils/Countries.json");
const SiteTypes = require("../utils/SiteTypes.json");

export const SiteBasics = (props) => {
  const site = props.site;

  return (
    <section
      id="basics"
      style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}
    >
      {/* site name */}
      <h1 style={{ marginBottom: 0 }} className={utilStyles.heading2Xl}>
        {site.name}
      </h1>

      {/* city */}
      <Row>
        <Col
          style={{
            fontWeight: "bold",
            marginTop: 5,
            fontSize: "1.1rem",
          }}
        >
          <span>
            {site.address.city}
            {" . "}
          </span>
          <a
            style={{ color: "grey" }}
            href={`https://www.google.com/maps/place/${encodeURIComponent(
              `${site.address.street},${site.address.postalCode} ${site.address.city} France`
            )}`}
          >
            {site.address.street}, {site.address.postalCode} {site.address.city}
            , France
          </a>
        </Col>
        </Row>

      {/* types */}
      <Row>
        <Col
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
                  marginRight: 10,
                  padding: "3px 10px",
                  borderRadius: 3,
                }}
              >
                {t in SiteTypes ? SiteTypes[t][LANG] : t}
              </span>
            ))}
        </Col>
      </Row>

      <h5 style={{ marginTop: 20, color: "#333" }}>{site.headline}</h5>
    </section>
  );
};
