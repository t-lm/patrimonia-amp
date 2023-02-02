// ./comps/discobasics.js

import Link from "next/link";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageBootstrap from "react-bootstrap/Image";

import utilStyles from "../styles/utils.module.css";

const LANG = "fr";
const DiscoSubjects = require("../utils/DiscoSubjects.json");

export const DiscoBasics = (props) => {
  const disco = props.disco;
  const guide = props.guide;

  return (
    <section
      id="basics"
      style={{
        backgroundColor: "white",
        padding: "10px 10px",
        marginTop: 10,
      }}
    >
      <Row>
        <Col>
          <h1 style={{ marginBottom: 0 }} className={utilStyles.heading2Xl}>
            {disco.name}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            fontWeight: "bold",
            marginTop: 5,
            fontSize: "1.1rem",
          }}
        >
          <span>{disco.address.city}</span>
          <span>
            {" "}
            .{" "}
            <Link style={{ color: "black" }} href={`/guides/${guide.id}`}>
              {guide.name}
            </Link>
            <ImageBootstrap
              src={`/guides/${guide.picture}`}
              className="rounded"
              alt={guide.name}
              title={guide.name}
              width={30}
              height={30}
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
        </Col>
      </Row>

      <Row>
        <Col>
          {disco.subjects && (
            <div>
              {disco.subjects.map((sub, i) => (
                <span
                  key={sub}
                  style={{
                    backgroundColor: DiscoSubjects[sub]["color"],
                    color: "white",
                    fontSize: "0.8rem",
                    padding: 4,
                    borderRadius: 4,
                    marginLeft: i > 0 && 7,
                  }}
                >
                  {sub in DiscoSubjects && (
                    <span>{DiscoSubjects[sub][LANG]}</span>
                  )}
                </span>
              ))}
            </div>
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          <h5 style={{ marginTop: 20, color: "#666" }}>{disco.headline}</h5>
        </Col>
      </Row>
    </section>
  );
};
