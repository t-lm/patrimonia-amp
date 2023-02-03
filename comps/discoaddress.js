// ./comps/discoaddress.js

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Keys } from "../utils/dictionary";

const LANG = "fr";

export const DiscoAddress = (props) => {
  const disco = props.disco;

  return (

    <section
    id="where"
    style={{
      backgroundColor: "white",
      padding: "10px 10px",
      marginTop: 10,
    }}
  >
    <Row>
      <Col xs={12}>
        <h3 style={{ marginBottom: 20, fontWeight: "bold" }}>{Keys[LANG].meetingPoint}</h3>
      </Col>
    </Row>
    {disco.address && (
      <Row>
        <Col xs={6} md={3}>
          {Keys[LANG].address}
        </Col>
        <Col xs={6} md={9}>
          <a
            style={{ color: "grey", textDecoration: "underline" }}
            href={`https://www.google.com/maps/place/${encodeURIComponent(
              `${disco.address.street},${disco.address.postalCode} ${disco.address.city}, France`
            )}`}
          >
            {disco.address.street}, {disco.address.postalCode}{" "}
            {disco.address.city},{" France"}
          </a>
        </Col>
      </Row>
    )}
    {disco.meetingPoint && (
      <Row>
        <Col xs={6} md={3}>
          {Keys[LANG].meetingPoint}
        </Col>
        <Col xs={6} md={9} style={{ color: "grey" }}>
          {disco.meetingPoint}
        </Col>
      </Row>
    )}
  </section>

  );
};
