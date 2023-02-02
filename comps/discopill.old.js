// ./comps/discopill.js

// a small pill about a discovery

import Link from "next/link";
import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageBootstrap from "react-bootstrap/Image";

import { FormattedDate } from "../comps/date";

const LANG = "fr";
const DiscoTypes = require("../utils/DiscoTypes.json");
const DiscoSubjects = require("../utils/DiscoSubjects.json");

export const DiscoPill = (props) => {
  const v = props.visit;
  const allGuides = props.allGuides;
  const allSites = props.allSites;

  return (
    <Row
      key={v.id}
      style={{
        marginTop: 10,
        marginLeft: 0,
        marginRight: 0,
        padding: 15,
        border: "1px solid #eee",
        backgroundColor: "white",
      }}
    >
      {/* Image */}
      <Col xs={3} md={2} style={{ padding: 0 }}>
        <div
          style={{
            width: 90,
            height: 90,
            position: "relative",
            display: "block",
          }}
        >
          <Image
            src={`/sites/${v.picture}`}
            className="shadow-1-strong rounded"
            alt={v.name}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </Col>

      {/* Text */}
      <Col style={{ marginLeft: 10 }}>
        {/* Name */}
        <Row>
          <Col>
            <span
              style={{
                fontWeight: "bold",
                marginTop: 10,
                fontSize: "1.1rem",
                overflowWrap: "break-word" 
              }}
            >
              <Link
                href={`/visits/${v.id}`}
                style={{ color: "black", fontWeight: "bold" }}
              >
                {v.name}
              </Link>
            </span>
          </Col>
        </Row>

        {/* City and guide */}
        <Row style={{ fontWeight: "bold", marginBottom: 5 }}>
          <Col>
          {v.address.city && <span>{v.address.city}</span>}
          {allGuides.find((x) => x.id === v.guideID) && (
            <span>
              {" "}
              .{" "}
              <Link
                style={{ color: "black" }}
                href={`/guides/${allGuides.find((x) => x.id === v.guideID).id}`}
              >
                {allGuides.find((x) => x.id === v.guideID).name}
              </Link>
              <ImageBootstrap
                src={`/guides/${
                  allGuides.find((x) => x.id === v.guideID).picture
                }`}
                className="rounded"
                alt={allGuides.find((x) => x.id === v.guideID).name}
                title={allGuides.find((x) => x.id === v.guideID).name}
                width={25}
                height={25}
                roundedCircle
                style={{
                  objectFit: "cover",
                  border: "1px solid #eee",
                  padding: 0,
                  display: "inline-block",
                  marginLeft: 10,
                }}
              />
            </span>
          )}
          </Col>
        </Row>

        {/* subjects */}
        <Row>
          <Col style={{ overflowWrap: "break-word"}}>
                {v.subjects.map((sub, i) => (
                    sub in DiscoSubjects && (
                      <span
                      key={i}
                        style={{
                          backgroundColor: DiscoSubjects[sub]["color"],
                          color: "white",
                          fontSize: "0.7rem",
                          padding: 4,
                          borderRadius: 4,
                          marginLeft: i > 0 ? 7 : 0,
                        }}
                      >
                        {DiscoSubjects[sub][LANG]}
                      </span>
                    )
                ))}
          </Col>
        </Row>

        {/* headline */}
        <Link href={`/visits/${v.id}`}>
          <div
            style={{
              margin: "10px 0px 5px",
              paddingTop: 0,
              fontSize: "0.9rem",
            }}
          >
            {v.headline.slice(0, 150)}
          </div>
        </Link>

        {/* Type & date */}
        <div
          style={{
            margin: "5px 0px",
            paddingTop: 0,
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          {v.type && (
            <span>
              {v.type in DiscoTypes ? DiscoTypes[v.type][LANG] : v.type}
            </span>
          )}
          {/* Dates */}
          {v.type === "event" && (
            <>
              {" . "}
              <FormattedDate dateString={v.dates[0].start} />
            </>
          )}
        </div>

        {/* Sites */}
        <div
          style={{
            marginBottom: 5,
            paddingTop: 0,
            marginTop: 10,
          }}
        >
          {v.sites &&
            Array.isArray(v.sites) &&
            v.sites.map((site, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: "#eee",
                  fontSize: "0.8rem",
                  padding: 4,
                  borderRadius: 4,
                  marginLeft: i > 0 ? 7 : 0,
                }}
              >
                {allSites.find((x) => x.id === site) && (
                  <Link href={`/sites/${site}`}>
                    {allSites.find((x) => x.id === site).name}
                  </Link>
                )}
              </span>
            ))}
        </div>
      </Col>
    </Row>
  );
};
