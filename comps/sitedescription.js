// ./comps/sitedescription.js

import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Keys } from "../utils/dictionary";

const LANG = "fr";

export const SiteDescription = (props) => {

  const description = props.site.description;
  
  return (
    <section id="description" 
        style={{
          marginTop: 20,
          backgroundColor: "white",
          padding: 10
        }}
        >
      <Row>
        <Col>
          <h3 style={{ fontWeight: "bold" }}>{Keys[LANG].description}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
        <span style={{whiteSpace: "pre-line"}}>{description}</span>
        </Col>
      </Row>

    </section>
  );
};
