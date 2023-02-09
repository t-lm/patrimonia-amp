// ./comps/discopill.js

import Link from "next/link";
import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FormattedDate } from "./date";

const LANG = "fr";
const DiscoSubjects = require("../utils/DiscoSubjects.json");
const DiscoTypes = require("../utils/DiscoTypes.json");

export const DiscoPill = (props) => {
  const disco = props.disco;

  return (
    <Row
      style={{
        margin: "10px 0px 0px 0px",
        padding: 15,
        border: "1px solid #eee",
        backgroundColor: "white",
        fontSize: "0.9rem"
      }}
    >
      {/* Image */}
      <Col xs={3} md={2} style={{ padding: 0 }}>
        <div
          style={{
            width: 120,
            height: 120,
            position: "relative",
            display: "block",
          }}
        >
          <Image
            src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/sites/${disco.pictures[0]}`}
            alt={disco.name}
            className="shadow-1-strong rounded"
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 25vw, 16vw"
          />
        </div>
      </Col>

      {/* Main */}
      <Col style={{ marginLeft: 10 }}>
        {/* Name */}
        <Row>
          <Col>
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
                {disco.name}
              </Link>
            </span>
          </Col>
        </Row>

        {/* City and site */}
        <div>
          <span>{disco.address.city}</span>
          {" . "}
          <span>
            <Link href={`/sites/${disco.siteID}`}>{disco.site.name}</Link>
          </span>
        </div>

        {/* Guide */}
        <div>
          <Link
            style={{ color: "black" }}
            href={`/guides/${disco.organiserID}`}
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
          <span>{DiscoTypes[disco.type][LANG]}</span>
          {/* Dates */}

          {disco.type === "event" && (
            <>
              {" . "}
              <FormattedDate dateString={disco.dates[0].start} />
            </>
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
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
