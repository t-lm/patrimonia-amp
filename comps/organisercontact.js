// ./comps/organisercontact.js

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Keys } from "../utils/dictionary";

export const OrganiserContact = (props) => {
  const organiser = props.organiser;
  const lang = props.lang

  return (

    <div
    id="contact"
    style={{
      backgroundColor: "white",
      padding: "10px 10px",
      marginTop: 30,
      color: "black"
    }}
  >
    <h4 style={{ marginBottom: 20 }}>{Keys[lang].contact}</h4>
    {organiser.address && (
      <Row
        style={{
          marginTop: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col xs={4} md={3}>
          {Keys[lang]["address"]}
        </Col>
        <Col xs={8} md={9}>
          <a
            style={{ color: "grey", textDecoration: "underline" }}
            href={`https://www.google.com/maps/place/${encodeURIComponent(
              `${organiser.address.street},${organiser.address.postalCode} ${organiser.address.city},${organiser.address.country}`
            )}`}
          >
            {organiser.address.street && (
              <span>{organiser.address.street},</span>
            )}{" "}
            {organiser.address.postalCode} {organiser.address.city}
          </a>
        </Col>
      </Row>
    )}
    {organiser.www && (
      <Row
        style={{
          marginTop: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col xs={4} md={3}>
          {Keys[lang]["www"]}
        </Col>
        <Col xs={8} md={9} style={{ color: "grey" }}>
          <a href={`${organiser.www}`}>{organiser.www}</a>
        </Col>
      </Row>
    )}
    {organiser.phone && (
      <Row
        style={{
          marginTop: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col xs={4} md={3}>
          {Keys[lang]["phone"]}
        </Col>
        <Col xs={8} md={9} style={{ color: "grey" }}>
          {organiser.phone}
        </Col>
      </Row>
    )}
    {organiser.email && (
      <Row
        style={{
          marginTop: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col xs={4} md={3}>
          {Keys[lang]["email"]}
        </Col>
        <Col xs={8} md={9} style={{ color: "grey" }}>
          {organiser.email}
        </Col>
      </Row>
    )}
  </div>
  );
};
