// ./comps/discoaddress.js

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Keys = require("../utils/Keys.json");
const Countries = require("../utils/Countries.json");

export const DiscoAddress = (props) => {
  const disco = props.disco;
  const lang = props.lang

  return (

    <div
    style={{
      backgroundColor: "white",
      padding: "10px 10px",
      marginTop: 30,
      color: "black",
    }}
  >

    <h3 style={{ marginBottom: 20, fontWeight: "bold" }}>{Keys.meetingPoint[lang]}</h3>

    {disco.address && (
      <Row>
        <Col xs={6} md={3} style={{ fontWeight: "bold" }}>
          {Keys.address[lang]}
        </Col>
        <Col xs={6} md={9}>
          <a
            style={{ color: "grey", textDecoration: "underline" }}
            href={`https://www.google.com/maps/place/${encodeURIComponent(
              `${disco.address.street},${disco.address.postalCode} ${disco.address.city}, ${Countries["fr"][lang]}`
            )}`}
          >
            {disco.address.street}, {disco.address.postalCode}{" "}
            {disco.address.city}, {Countries["fr"][lang]}
          </a>
        </Col>
      </Row>
    )}
    {disco.practicalInfo && (
      <Row>
        <Col xs={6} md={3} style={{ fontWeight: "bold" }}>
          Information pratique
        </Col>
        <Col xs={6} md={9} style={{ color: "grey" }}>
          {disco.practicalInfo}
        </Col>
      </Row>
    )}
  </div>

  );
};
