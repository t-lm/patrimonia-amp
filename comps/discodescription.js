// ./comps/discodescription.js

import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Keys } from "../utils/dictionary";

const LANG = "fr";

export const DiscoDescription = (props) => {
  const description = props.description;
  const [showFullDescription, setShowFullDescription] = useState(false);
  let breakCharacter = description.slice(500).search(" "); // ensures clean break
  const shortDescription =
    description.length > 500
      ? `${description.slice(0, 500 + breakCharacter)} ...`
      : description;

  return (
    <section
      id="description"
      style={{
        backgroundColor: "white",
        padding: "10px 10px",
        marginTop: 10,
      }}
    >
      <Row>
        <Col>
          <h3 style={{ marginBottom: 20, fontWeight: "bold" }}>{Keys[LANG].description}</h3>
          <div
            style={{ display: "block" }}
            dangerouslySetInnerHTML={{
              __html: !showFullDescription ? shortDescription : description,
            }}
          />
        </Col>
      </Row>

      {description.length > 500 && (
        <Row>
          <Col>
            <Button
              variant="link"
              style={{
                color: "grey",
                margin: "5px 0px",
                padding: 0,
                float: "left",
                fontSize: "0.9rem",
              }}
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? Keys[LANG].seeless : Keys[LANG].seemore}
            </Button>
          </Col>
        </Row>
      )}
    </section>
  );
};
