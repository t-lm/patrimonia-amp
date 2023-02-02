// ./comps/discofacts.js
// main facts on disco page

import { Keys } from "../utils/dictionary";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageBootstrap from "react-bootstrap/Image";

import {
  FormattedDurationFromMinutes,
  FormattedDurationFromMinutesInterval,
} from "./date";

const LANG = "fr";
const SiteStyles = require("../utils/SiteStyles.json");
const SiteEvents = require("../utils/SiteEvents.json");
const DiscoLanguages = require("../utils/DiscoLanguages.json");
const SitePeriods = require("../utils/SitePeriods.json");
const DiscoFormats = require("../utils/DiscoFormats.json");
const DiscoPrices = require("../utils/DiscoPrices.json");

export const DiscoFacts = (props) => {
  const guide = props.guide;
  const disco = props.disco;

  return (
    <section
      id="facts"
      style={{
        backgroundColor: "white",
        padding: "10px 10px",
        marginTop: 10,
      }}
    >
      <Row id="facts-guide">
        <Col xs={6} md={8} lg={10}>
          <h3 style={{ marginBottom: 20 }}>
            {Keys[LANG]["discoProposedBy"]} {guide.name}
          </h3>
        </Col>
        <Col>
          <ImageBootstrap
            src={`/guides/${guide.picture}`}
            className="rounded pe-1"
            alt={guide.name}
            title={guide.name}
            width={60}
            height={60}
            roundedCircle
            style={{
              objectFit: "cover",
              border: "2px solid #111",
              padding: 2,
            }}
          />
        </Col>
      </Row>

      {disco.duration && (
        <Row>
          <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
            {Keys[LANG]["discoDuration"]}
          </Col>
          <Col xs={8} md={9}>
            {disco.duration && (
              <>
                {disco.duration.length === 1 ? (
                  <FormattedDurationFromMinutes minutes={disco.duration[0]} />
                ) : (
                  <>
                    <FormattedDurationFromMinutesInterval
                      minutesMin={disco.duration[0]}
                      minutesMax={disco.duration[1]}
                      lang={LANG}
                    />
                  </>
                )}
              </>
            )}
          </Col>
        </Row>
      )}

      {disco.languages && disco.languages.length > 0 && (
        <Row>
          <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
            {Keys[LANG]["discoToldIn"]}
          </Col>
          <Col xs={8} md={9}>
            {disco.languages.map((l, i) => (
              <span key={i}>
                {DiscoLanguages[l][LANG]}
                {i < disco.languages.length - 1 && ","}
              </span>
            ))}
          </Col>
        </Row>
      )}
      
      {/* format */}
      <Row>
        <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
          {Keys[LANG]["discoFormat"]}
        </Col>
        <Col xs={8} md={9}>
          {DiscoFormats[disco.format][LANG]}
        </Col>
      </Row>
      
      {/* price */}
      <Row>
        <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
          {Keys[LANG]["price"]}
        </Col>
        <Col xs={8} md={9}>
          {DiscoPrices[disco.price][LANG]}
          {disco.priceCommentary && <>{", "}{disco.priceCommentary}</>}
        </Col>
      </Row>

      {/* ici je rajouterai bien les qualifications des personnes */}
      {(disco.periods || disco.styles || disco.persons || disco.events) && (
        <div
          id="facts-science"
          style={{
            marginTop: 10,
            borderTop: "1px solid #eee",
            paddingTop: 10,
          }}
        >
          {disco.periods && (
            <Row>
              <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
                {disco.periods.length > 1
                  ? Keys[LANG]["keySitePeriods"]
                  : Keys[LANG]["keyPeriod"]}
              </Col>
              <Col xs={8} md={9}>
                {disco.periods.length > 0 &&
                  disco.periods.map((t, i) => (
                    <span key={i}>
                      {t in SitePeriods ? SitePeriods[t][LANG] : t}
                      {i < disco.periods.length - 1 && ", "}
                    </span>
                  ))}
              </Col>
            </Row>
          )}
          {disco.styles && (
            <Row
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
                {disco.styles.length > 1
                  ? Keys[LANG]["keyStyles"]
                  : Keys[LANG]["keyStyle"]}
              </Col>
              <Col xs={8} md={9}>
                {disco.styles.length > 0 &&
                  disco.styles.map((t, i) => (
                    <span key={i}>
                      {t in SiteStyles ? SiteStyles[t][LANG] : t}
                      {i < disco.styles.length - 1 && ", "}
                    </span>
                  ))}
              </Col>
            </Row>
          )}
          {disco.persons && (
            <Row
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
                {disco.persons.length > 1
                  ? Keys[LANG]["keyPeople"]
                  : Keys[LANG]["keyPerson"]}
              </Col>
              <Col xs={8} md={9}>
                {disco.persons.length > 0 &&
                  disco.persons.map((t, i) => (
                    <span key={i}>
                      {t}
                      {i < disco.persons.length - 1 && ", "}
                    </span>
                  ))}
              </Col>
            </Row>
          )}
          {disco.events && (
            <Row
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
                {disco.events.length > 1
                  ? Keys[LANG]["keySiteEvents"]
                  : Keys[LANG]["keySiteEvents"]}
              </Col>
              <Col xs={8} md={9}>
                {disco.events.length > 0 &&
                  disco.events.map((t, i) => (
                    <span key={i}>
                      {t in SiteEvents ? SiteEvents[t][LANG] : t}
                      {i < disco.events.length - 1 && ", "}
                    </span>
                  ))}
              </Col>
            </Row>
          )}
        </div>
      )}
    </section>
  );
};
