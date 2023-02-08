// ./comps/sitepill.js

// a small pill about a site

import Link from "next/link";
import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LANG = "fr";
const SitePeriods = require("../utils/SitePeriods.json");
const SiteStyles = require("../utils/SiteStyles.json");
const SiteTypes = require("../utils/SiteTypes.json");
const { Icons } = require("../utils/icons");

export const SitePill = (props) => {
  const s = props.site;
  console.log(s.types)

  return (
    <Row
      style={{
        marginTop: 10,
        marginLeft: 5,
        padding: 20,
        border: "1px solid #eee",
        backgroundColor: "white",
      }}
    >
      {/* Image */}
      <Col xs={4} md={2} style={{ padding: 0 }}>
        <div
          style={{
            width: 100,
            height: 100,
            position: "relative",
            display: "block",
          }}
        >
          <Image
            src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/sites/${s.picture.id}`}
            alt={s.picture.description_fr}
            title={s.name}
            className="shadow-1-strong rounded"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </Col>

      {/* Text */}
      <Col style={{ marginLeft: 20 }}>
        <div style={{ marginBottom: 5, paddingTop: 0 }}>
          <Link
            href={`/sites/${s.id}`}
            style={{ color: "black", fontWeight: "bold", fontSize: "1.1rem" }}
          >
            {s.name}
          </Link>
        </div>
        {/* City and type */}
        <div
          style={{
            marginBottom: 5,
            paddingTop: 0,
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          {s.address.city}
          {" . "}
          {s.types.map((t, i) =>  (
              <span key={i}>
                <span style={{marginRight: 10}}>{i > 0 && ", "}{SiteTypes[t][LANG]}</span>
                <span>{Icons[t]}</span>
              </span>
          ))
          }
        </div>

        {/* Headline */}
        <div
          style={{
            margin: "10px 0px 5px",
            paddingTop: 0,
            fontSize: "0.9rem",
          }}
        >
          <a>{s.headline}</a>
        </div>

        {/* Periods and styles */}
        <div style={{ marginBottom: 5, paddingTop: 0 }}>
          {/* periods */}
          {s.periods &&
            s.periods.map((p, i) => (
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
                {p in SitePeriods ? SitePeriods[p][LANG] : p}
              </span>
            ))}

          {/* styles */}
          {s.styles &&
            s.styles.map((s, i) => (
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
                {s in SiteStyles ? SiteStyles[s][LANG] : s}
              </span>
            ))}
        </div>
      </Col>
    </Row>
  );
};
