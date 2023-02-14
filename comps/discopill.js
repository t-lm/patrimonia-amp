// ./comps/discopill.js

import Link from "next/link";
import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FormattedEventDates, FormattedDaySlots, FormattedDays } from "./date";

const Keys = require("../utils/Keys.json");
const DiscoFormats = require("../utils/DiscoFormats.json");
const DiscoSubjects = require("../utils/DiscoSubjects.json");
const { Languages } = require("../utils/auth");

const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export const DiscoPill = (props) => {

  const disco = props.disco;
  const filter = props.filter;
  const lang = props.lang;
  
  return (
    <Row
      style={{
        margin: "10px 0px 0px 0px",
        padding: 15,
        border: "1px solid #eee",
        backgroundColor: "white",
        fontSize: "0.9rem",
        color: "black",
      }}
    >
      {/* Image */}
      <Col xs={3} md={2} style={{ padding: 0 }}>
        <div
          style={{
            width: "100%",
            height: 100,
            position: "relative",
            display: "block",
          }}
        >
          <Link href={`/discos/${disco.id}`}>
            <Image
              src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/sites/${disco.pictures[0]}`}
              alt={disco[Languages.includes(lang) ? `name_${lang}` : "name"]}
              className="shadow-1-strong rounded"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 25vw, 16vw"
            />
          </Link>
        </div>
      </Col>

      {/* Main */}
      <Col style={{ marginLeft: 10 }}>
        {/* Name */}

        <span
          style={{
            fontWeight: "bold",
            marginTop: 10,
            fontSize: "1.1rem",
            overflowWrap: "break-word",
          }}
        >
          <Link
            href={`/discos/${disco.id}`}
            style={{ color: "black", fontWeight: "bold" }}
          >
            {disco[Languages.includes(lang) ? `name_${lang}` : "name"]}
          </Link>
        </span>

        {/* City, site and format */}
        <div style={{ fontWeight: "bold" }}>
          <Link style={{ color: "black" }} href={`/sites/${disco.siteID}`}>
            {disco.address.city}
            {" . "}
            {disco.site[Languages.includes(lang) ? `name_${lang}` : "name"]}
            {" . "}
            {DiscoFormats[disco.format][lang]}
          </Link>
        </div>

        {/* Organiser */}
        <div>
          <Link
            style={{ color: "#266dff", fontWeight: "bold" }}
            href={`/organisers/${disco.organiserID}`}
          >
            {disco.organiser.name}
          </Link>
          <Image
            src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/organisers/${disco.organiserID}`}
            className="rounded"
            alt={disco.organiser.name}
            title={disco.organiser.name}
            width={25}
            height={25}
            style={{
              objectFit: "cover",
              border: "1px solid #eee",
              padding: 0,
              display: "inline-block",
              marginLeft: 10,
            }}
          />
        </div>

        {/* headline */}
        <div
          style={{
            paddingTop: 0,
            fontSize: "0.9rem",
          }}
        >
          <Link style={{ color: "black" }} href={`/discos/${disco.id}`}>
            {disco[Languages.includes(lang) ? `headline_${lang}` : "headline"]}
          </Link>
        </div>

        {/* Type & date helper */}
        <div
          style={{
            margin: "5px 0px",
            paddingTop: 0,
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          {/* Dates */}
          {disco.type === "regular" && (
            <>
              {["today", "tomorrow"].includes(filter.periodRange) ? (
              <Link
                href={`/discos/${disco.id}`}
                style={{ color: "black", fontWeight: "bold" }}
              >
                <FormattedDaySlots
                  slots={
                    disco.openingHours[
                      week[new Date(filter.startPeriod).getDay()]
                    ]
                  }
                  lang={lang}
                  verbose={Keys[filter.periodRange][lang]}
                />
              </Link>
              ) : (
              <Link
                href={`/discos/${disco.id}`}
                style={{ color: "black", fontWeight: "bold" }}
              >
                <FormattedDays slots={disco.openingHours} lang={lang} />
              </Link>
              )}
            </>
          )}

          {disco.type === "event" && (
            <Link
              href={`/discos/${disco.id}`}
              style={{ color: "black", fontWeight: "bold" }}
            >
              <FormattedEventDates dates={disco.dates} lang={lang} />
            </Link>
          )}

          {disco.type === "demand" && (
            <Link
              href={`/discos/${disco.id}`}
              style={{ color: "black", fontWeight: "bold" }}
            >
              {Keys["discosOnDemand"][lang]}
            </Link>
          )}
        </div>

        {/* subjects */}
        <Row>
          <Col style={{ overflowWrap: "break-word" }}>
            {disco.subjects.map(
              (sub, i) =>
                sub in DiscoSubjects && (
                  <span
                    key={i}
                    style={{
                      backgroundColor: `rgba(${DiscoSubjects[sub]["r"]}, ${DiscoSubjects[sub]["g"]}, ${DiscoSubjects[sub]["b"]}, 0.2)`,
                      fontSize: "0.7rem",
                      padding: 4,
                      borderRadius: 4,
                      marginLeft: i > 0 ? 7 : 0,
                    }}
                  >
                    {DiscoSubjects[sub][lang]}
                  </span>
                )
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
