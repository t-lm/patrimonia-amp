// ./comps/sitefacts.js

// main facts on visit page
import Image from "next/image";

import { Keys } from "../utils/dictionary";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LANG = "fr";
const SiteEvents = require("../utils/SiteEvents.json");
const SiteStyles = require("../utils/SiteStyles.json");
const SitePeriods = require("../utils/SitePeriods.json");
const SiteProtections = require("../utils/SiteProtections.json");

export const SiteFacts = (props) => {
  const site = props.site;

  return (
    <section
      id="facts"
      style={{
        marginTop: 20,
        backgroundColor: "white", 
        padding: 10
      }}
    >
      <Row>
        <Col>
          <h3 style={{ fontWeight: "bold" }}>{Keys[LANG].keyFacts}</h3>
        </Col>
      </Row>
      {site.periods && (
        <Row style={{ marginTop: 5 }}>
          <Col xs={4} md={2} style={{ fontWeight: "bold" }}>
            {site.periods.length > 1
              ? Keys[LANG]["keyPeriods"]
              : Keys[LANG]["keyPeriod"]}
            :
          </Col>
          <Col xs={8} md={10}>
            {site.periods.length > 0 &&
              site.periods.map((t, i) => (
                <span key={i}>
                  {t in SitePeriods ? SitePeriods[t][LANG] : t}
                  {i < site.periods.length - 1 && ", "}
                </span>
              ))}
          </Col>
        </Row>
      )}
      {site.styles && (
        <Row style={{ marginTop: 5 }}>
          <Col xs={4} md={2} style={{ fontWeight: "bold" }}>
            {site.styles.length > 1
              ? Keys[LANG]["keyStyles"]
              : Keys[LANG]["keyStyle"]}
            :
          </Col>
          <Col xs={8} md={10}>
            {site.styles.length > 0 &&
              site.styles.map((t, i) => (
                <span key={i}>
                  {t in SiteStyles ? SiteStyles[t][LANG] : t}
                  {i < site.styles.length - 1 && ", "}
                </span>
              ))}
          </Col>
        </Row>
      )}

      {site.persons && (
        <Row style={{ marginTop: 5 }}>
          <Col xs={4} md={2} style={{ fontWeight: "bold" }}>
            {site.persons.length > 1
              ? Keys[LANG]["keyPeople"]
              : Keys[LANG]["keyPerson"]}
            :
          </Col>
          <Col xs={8} md={10}>
            {site.persons.length > 0 &&
              site.persons.map((t, i) => (
                <span key={i}>
                  {t}
                  {i < site.persons.length - 1 && ", "}
                </span>
              ))}
          </Col>
        </Row>
      )}
      {site.events && (
        <Row style={{ marginTop: 5 }}>
          <Col xs={4} md={2} style={{ fontWeight: "bold" }}>
            {site.events.length > 1
              ? Keys[LANG]["keyEvents"]
              : Keys[LANG]["keyEvents"]}
            :
          </Col>
          <Col xs={8} md={10}>
            {site.events.length > 0 &&
              site.events.map((t, i) => (
                <span key={i}>
                  {t in SiteEvents ? SiteEvents[t][LANG] : t}
                  {i < site.events.length - 1 && ", "}
                </span>
              ))}
          </Col>
        </Row>
      )}
      {site.protections && (
        <Row style={{ marginTop: 5 }}>
          <Col xs={4} md={2} style={{ fontWeight: "bold" }}>
            {site.protections.length > 1
              ? Keys[LANG]["protections"]
              : Keys[LANG]["protection"]}
            :
          </Col>
          <Col xs={8} md={10}>
            {site.protections.length > 0 &&
              site.protections.map((t, i) => (
                <span key={i}>
                  {t in SiteProtections && SiteProtections[t][LANG]}
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
    </section>
  );
};
