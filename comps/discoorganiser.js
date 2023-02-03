// ./comps/discoorganiser.js

import Link from "next/link";
import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Keys } from "../utils/dictionary";

const LANG = "fr";

export const DiscoOrganiser = (props) => {
  const organiser = props.organiser;

  return (

    <section
    id="organiser"
    style={{
      backgroundColor: "white",
      padding: "10px 10px",
      marginTop: 10,
    }}
  >
    <Row>
      <Col>
        <h3 style={{fontWeight: "bold"}}>{Keys[LANG].organiser}: {organiser.name}</h3>
      </Col>
    </Row>
    <Row
      style={{
        display: "flexbox",
        alignItems: "center",
        marginTop: 20,
      }}
    >
     
        <Col xs={4} md={3}>
          
          <Image
            src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/organisers/${organiser.id}`}
            className="rounded pe-1"
            alt={organiser.name}
            title={organiser.name}
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
      {organiser.description_fr && (
        <Col>
          <Link href={`/organisers/${organiser.id}`} style={{color: "grey"}}>{organiser.description_fr}</Link>
        </Col>
      )}
    </Row>
  </section>

  );
};
