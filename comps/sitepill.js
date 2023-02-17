// ./comps/sitepill.js

// a small pill about a site

import Link from "next/link";
import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SiteOpening = require("../utils/SiteOpening.json");
const SitePeriods = require("../utils/SitePeriods.json");
const SiteStyles = require("../utils/SiteStyles.json");
const SiteTypes = require("../utils/SiteTypes.json");
const { Icons } = require("../utils/icons");

export const SitePill = (props) => {
  const site = props.site;
  const lang = props.lang

  return (
    <Row
      style={{
        margin: "10px 0px 0px 0px",
        padding: 20,
        border: "1px solid #eee",
        backgroundColor: "white",
        color: "black",
      }}
    >
      {/* Image */}
      <Col xs={4} md={2} style={{ padding: 0 }}>
        <div
          style={{
            width: 120,
            height: 120,
            position: "relative",
            display: "block",
          }}
        >
          <Link href={`/sites/${site.id}`}>
            <Image
              src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/sites/${site.picture.id}`}
              alt={site.picture.description_fr}
              title={site.name}
              className="shadow-1-strong rounded"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 25vw, 16vw"
            />
          </Link>
        </div>
      </Col>

      {/* Text */}
      <Col style={{ marginLeft: 20, color: "black" }}>
        <div style={{ paddingTop: 0 }}>
          <Link
            href={`/sites/${site.id}`}
            style={{ color: "black", fontWeight: "bold", fontSize: "1.1rem" }}
          >
            {site.name}
          </Link>
        </div>
        {/* City, type and opening */}
        <div
          style={{
            marginBottom: 5,
            paddingTop: 0,
            fontSize: "1rem",
            fontWeight: "bold",
            
          }}
        >
          {site.address.city}
          {" . "}
          {site.types.map((t, i) => (
            <div key={i} style={{ display: "inline" }}>
              <div style={{ display: "inline" }}>
                {i > 0 && " "}
                {SiteTypes[t][lang]}
              </div>
              {/*<div style={{display: "inline", verticalAlign: "middle" }}>{Icons[t]}</div>*/}
            </div>
          ))}
          {" . "}
          {SiteOpening[site.opening][lang]}
        </div>

        {/* Headline */}
        <div
          style={{
            margin: "10px 0px 5px",
            paddingTop: 0,
            fontSize: "0.9rem",
          }}
        >
          <a>{site.headline}</a>
        </div>

        {/* Periods and styles */}
        <div style={{ marginBottom: 5, paddingTop: 0 }}>
          {/* periods */}
          {site.periods &&
            site.periods.map((p, i) => (
              <span
                key={i}
                style={{
                  marginRight: 7,
                  fontSize: "0.8rem",
                  borderRadius: 4,
                  backgroundColor: "#d4e9fb",
                  padding: "2px 5px",
                }}
              >
                {p in SitePeriods ? SitePeriods[p][lang] : p}
              </span>
            ))}

          {/* styles */}
          {site.styles &&
            site.styles.map((s, i) => (
              <span
                key={i}
                style={{
                  marginRight: 7,
                  fontSize: "0.8rem",
                  borderRadius: 4,
                  backgroundColor: "#ebd8b1",
                  padding: "2px 5px",
                }}
              >
                {s in SiteStyles ? SiteStyles[s][lang] : s}
              </span>
            ))}
        </div>
      </Col>
    </Row>
  );
};
