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
    <div
        style={{
          marginTop: 20,
          backgroundColor: "white",
          padding: 10
        }}
        >
      <h3 style={{ fontWeight: "bold" }}>{Keys[LANG].description}</h3>
      <span style={{whiteSpace: "pre-line"}}>{description}</span>

    </div>
  );
};
