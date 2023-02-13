// ./comps/discoorganiser.js

import Link from "next/link";
import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const DiscoOrganiser = (props) => {
  const organiser = props.organiser;
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
      <h3>
        <Link href={`/organisers/${organiser.id}`} style={{ fontWeight: "bold", color: "black" }}>
          {organiser.name}
        </Link>
      </h3>
      <Row
        style={{
          marginTop: 20,
        }}
      >
        <Col xs={4} md={3}>
          <Image
            src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/organisers/${organiser.id}`}
            className="rounded pe-1"
            alt={organiser.name}
            title={organiser.name}
            width={120}
            height={120}
            style={{
              objectFit: "cover",
              border: "1px solid #ddd",
              padding: 2,
            }}
          />
        </Col>
        {organiser.description && (
          <Col>
            <span style={{ whiteSpace: "pre-line" }}>
              {organiser.description}
            </span>
          </Col>
        )}
      </Row>
    </div>
  );
};
