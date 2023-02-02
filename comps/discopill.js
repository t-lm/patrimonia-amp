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
  const disco = props.disco;
  //const allGuides = props.allGuides;
  //const allSites = props.allSites;

  return (
    <Row
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
            src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/${disco.pictures[0]}`}
            alt={disco.name}
            className="shadow-1-strong rounded"
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
                href={`/discos/${disco.id}`}
                style={{ color: "black", fontWeight: "bold" }}
              >
                {disco.name}
              </Link>
            </span>
          </Col>
        </Row>

        {/* City and guide */}
        <Row style={{ fontWeight: "bold", marginBottom: 5 }}>
          <Col>
          <span>{disco.address.city}</span>
          </Col>
        </Row>

        {/* subjects */}
        <Row>
          <Col style={{ overflowWrap: "break-word"}}>
                {disco.subjects.map((sub, i) => (
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
        <Link href={`/discos/${disco.id}`}>
          <div
            style={{
              margin: "10px 0px 5px",
              paddingTop: 0,
              fontSize: "0.9rem",
            }}
          >
            {disco.headline.slice(0, 150)}
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
          {/*disco.type && (
            <span>
              {disco.type in DiscoTypes ? DiscoTypes[disco.type][LANG] : disco.type}
            </span>
          )*/}
          {/* Dates */}
          
          {/*disco.type === "event" && (
            <>
              {" . "}
              <FormattedDate dateString={v.dates[0].start} />
            </>
          ))*/}
        </div>

        {/* Sites */}
        {/*
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
                </div>*/}
      </Col>
    </Row>
  );
};
