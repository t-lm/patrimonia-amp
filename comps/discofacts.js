// ./comps/discofacts.js
// main facts on disco page

import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Keys } from "../utils/dictionary";

import {
  FormattedDurationFromMinutes,
  FormattedDurationFromMinutesInterval,
} from "./date";

const SiteStyles = require("../utils/SiteStyles.json");
const DiscoLanguages = require("../utils/DiscoLanguages.json");
const SitePeriods = require("../utils/SitePeriods.json");
const DiscoFormats = require("../utils/DiscoFormats.json");
const DiscoPrices = require("../utils/DiscoPrices.json");
const { Languages } = require("../utils/auth");

export const DiscoFacts = (props) => {

  const disco = props.disco;
  const lang = props.lang
  
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px 10px",
        marginTop: 30,
        color: "black"
      }}
    >
      <Row>
        <Col xs={6} md={8} lg={10}>
          <h3 style={{ marginBottom: 20, fontWeight: "bold" }}>
            {Keys[lang]["discoProposedBy"]} {disco.organiser.name}
          </h3>
        </Col>
        <Col>
          <Image
            src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/organisers/${disco.organiser.id}`}
            className="rounded pe-1"
            alt={disco.organiser.name}
            title={disco.organiser.name}
            width={60}
            height={60}
            style={{
              objectFit: "cover",
              border: "1px solid #ddd",
              padding: 2,
            }}
          />
        </Col>
      </Row>

      {disco.duration && (
        <Row>
          <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
            {Keys[lang]["discoDuration"]}
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
                      lang={lang}
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
            {Keys[lang]["discoToldIn"]}
          </Col>
          <Col xs={8} md={9}>
            {disco.languages.map((l, i) => (
              <span key={i}>
                {DiscoLanguages[l][lang]}
                {i < disco.languages.length - 1 && ","}
              </span>
            ))}
          </Col>
        </Row>
      )}
      
      <Row>
        <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
          {Keys[lang]["discoFormat"]}
        </Col>
        <Col xs={8} md={9}>
          {DiscoFormats[disco.format][lang]}
        </Col>
      </Row>
      
      {/* price */}
      <Row>
        <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
          {Keys[lang]["price"]}
        </Col>
        <Col xs={8} md={9}>
          {DiscoPrices[disco.price][lang]}
          {disco.priceCommentary && <>{", "}{disco.priceCommentary}</>}
        </Col>
      </Row>

      {/* ici je rajouterai bien les qualifications des personnes */}
      {(disco.periods.length > 0 || disco.styles.length > 0 || disco.persons.length > 0 || disco.events.length > 0) && (
        <div
          id="facts-science"
          style={{
            marginTop: 10,
            borderTop: "1px solid #eee",
            paddingTop: 10,
          }}
        >
          {disco.periods.length > 0 && (
            <Row>
              <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
                {disco.periods.length > 1
                  ? Keys[lang]["keyPeriods"]
                  : Keys[lang]["keyPeriod"]}
              </Col>
              <Col xs={8} md={9}>
                {disco.periods.map((t, i) => (
                    <span key={i}>
                      {t in SitePeriods ? SitePeriods[t][lang] : t}
                      {i < disco.periods.length - 1 && ", "}
                    </span>
                  ))}
              </Col>
            </Row>
          )}
          {disco.styles.length > 0 && (
            <Row>
              <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
                {disco.styles.length > 1
                  ? Keys[lang]["keyStyles"]
                  : Keys[lang]["keyStyle"]}
              </Col>
              <Col xs={8} md={9}>
                {disco.styles.map((t, i) => (
                    <span key={i}>
                      {t in SiteStyles ? SiteStyles[t][lang] : t}
                      {i < disco.styles.length - 1 && ", "}
                    </span>
                  ))}
              </Col>
            </Row>
          )}
          {disco.persons.length > 0 && (
            <Row>
              <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
                {disco.persons.length > 1
                  ? Keys[lang]["keyPeople"]
                  : Keys[lang]["keyPerson"]}
              </Col>
              <Col xs={8} md={9}>
                {disco.persons.map((t, i) => (
                    <span key={i}>
                      {t}
                      {i < disco.persons.length - 1 && ", "}
                    </span>
                  ))}
              </Col>
            </Row>
          )}
          {disco.events.length > 0 && (
            <Row>
              <Col xs={4} md={3} style={{ fontWeight: "bold" }}>
                {disco.events.length > 1
                  ? Keys[lang]["keyEvents"]
                  : Keys[lang]["keyEvent"]}
              </Col>
              <Col xs={8} md={9}>
                {disco.events.map((t, i) => (
                    <span key={i}>
                      {t}
                      {i < disco.events.length - 1 && ", "}
                    </span>
                  ))}
              </Col>
            </Row>
          )}
        </div>
      )}
    </div>
  );
};
