// ./comps/discoguide.js

import Link from "next/link";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageBootstrap from "react-bootstrap/Image";

import { Keys } from "../utils/dictionary";

const LANG = "fr";

export const DiscoGuide = (props) => {
  const guide = props.guide;

  return (

    <section
    id="guide"
    style={{
      backgroundColor: "white",
      padding: "10px 10px",
      marginTop: 10,
    }}
  >
    <Row>
      <Col>
        <h3 style={{fontWeight: "bold"}}>{Keys[LANG].organiser}: {guide.name}</h3>
      </Col>
    </Row>
    <Row
      style={{
        display: "flexbox",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      {guide.picture && (
        <Col xs={4} md={3}>
          {/*lead guide*/}
          <ImageBootstrap
            src={`/guides/${guide.picture}`}
            className="rounded pe-1"
            alt={guide.name}
            title={guide.name}
            width={100}
            height={100}
            roundedCircle
            style={{
              objectFit: "cover",
              border: "2px solid #111",
              padding: 2,
            }}
        />
        </Col>
      )}
      {guide.description && (
        <Col>
          <Link href={`/guides/${guide.id}`} style={{color: "grey"}}>{guide.description}</Link>
        </Col>
      )}
    </Row>
  </section>

  );
};
