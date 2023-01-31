// ./comps/sitelinks.js

import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Keys } from "../utils/dictionary";

const LANG = "fr";

export const SiteLinks = (props) => {
  const links = props.site.links;


  return (
    <section
      id="description"
      style={{
        marginTop: 20,
        backgroundColor: "white",
        padding: 10
      }}
    >
      <Row>
        <Col>
          <h3 style={{ fontWeight: "bold" }}>{Keys[LANG].links}</h3>
        </Col>
      </Row>
      <ul>
        {links.map(
          (l,i) =>
            l[LANG] && (
              <li key={i}>
                <a href={l.link}>{l[LANG]}</a>
              </li>
            )
        )}
      </ul>
    </section>
  );
};
