// ./comps/sitefacts.js

// main facts on visit page
import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Keys = require("../utils/Keys.json");
const SiteStyles = require("../utils/SiteStyles.json");
const SitePeriods = require("../utils/SitePeriods.json");
const SiteProtections = require("../utils/SiteProtections.json");

export const SiteFacts = (props) => {
  const site = props.site;
  const lang = props.lang
  
  return (
    <div
      style={{
        color: "black",
        marginTop: 20,
        backgroundColor: "white", 
        padding: 10
      }}
    >

      <h3 style={{ fontWeight: "bold" }}>{Keys.keyFacts[lang]}</h3>

      {site.periods.length > 0 && (
        <Row style={{ marginTop: 5 }}>
          <Col xs={4} md={2} style={{ fontWeight: "bold" }}>
            {site.periods.length > 1
              ? Keys["keyPeriods"][lang]
              : Keys["keyPeriod"][lang]}
            :
          </Col>
          <Col xs={8} md={10}>
            { site.periods.map((t, i) => (
                <span key={i}>
                  {t in SitePeriods ? SitePeriods[t][lang] : t}
                  {i < site.periods.length - 1 && ", "}
                </span>
              ))}
          </Col>
        </Row>
      )}

      {site.styles.length > 0 && (
        <Row style={{ marginTop: 5 }}>
          <Col xs={4} md={2} style={{ fontWeight: "bold" }}>
            {site.styles.length > 1
              ? Keys["keyStyles"][lang]
              : Keys["keyStyle"][lang]}
            :
          </Col>
          <Col xs={8} md={10}>
            { site.styles.map((t, i) => (
                <span key={i}>
                  {t in SiteStyles ? SiteStyles[t][lang] : t}
                  {i < site.styles.length - 1 && ", "}
                </span>
              ))}
          </Col>
        </Row>
      )}

      {site.persons && site.persons.length > 0 && (
        <Row style={{ marginTop: 5 }}>
          <Col xs={4} md={2} style={{ fontWeight: "bold" }}>
            {site.persons.length > 1
              ? Keys["keyPeople"][lang]
              : Keys["keyPerson"][lang]}
            :
          </Col>
          <Col xs={8} md={10}>
            { site.persons.map((t, i) => (
                <span key={i}>
                  {t}
                  {i < site.persons.length - 1 && ", "}
                </span>
              ))}
          </Col>
        </Row>
      )}

      {site.events && site.events.length > 0 && (
        <Row style={{ marginTop: 5 }}>
          <Col xs={4} md={2} style={{ fontWeight: "bold" }}>
            {site.events.length > 1
              ? Keys["keyEvents"][lang]
              : Keys["keyEvents"][lang]}
            :
          </Col>
          <Col xs={8} md={10}>
            {site.events.length > 0 &&
              site.events.map((t, i) => (
                <span key={i}>
                  {t}
                  {i < site.events.length - 1 && ", "}
                </span>
              ))}
          </Col>
        </Row>
        )}
      
      {site.protections && site.protections.length > 0 && site.protections[0] !== "" && (
        <Row style={{ marginTop: 5 }}>
          <Col xs={4} md={2} style={{ fontWeight: "bold" }}>
            {site.protections.length > 1
              ? Keys["protections"][lang]
              : Keys["protection"][lang]}
            :
          </Col>
          <Col xs={8} md={10}>
            {site.protections.length > 0 &&
              site.protections.map((t, i) => (
                <span key={i}>
                  {t in SiteProtections && SiteProtections[t][lang]}
                  {t === "mh" && (
                    <span style={{ marginLeft: 5 }}>
                      <Image
                        src="/protections/mh.png"
                        alt="monument historiques"
                        height={15}
                        width={15}
                        style={{ display: "inline" }}
                      />
                    </span>
                  )}
                  {i < site.protections.length - 1 && ", "}
                </span>
              ))}
          </Col>
        </Row>
      )}
    </div>
  );
};
