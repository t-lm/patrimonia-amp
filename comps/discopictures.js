// ./comps/discopictures.js

import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  DiscoMedia
} from "../utils/dictionary";

export const DiscoPictures = (props) => {
  
  const disco = props.disco

  return (
    <section
    id="pictures"
    style={{
      backgroundColor: "white",
      padding: "10px 10px",
      marginTop: 10,
    }}
  >
      <Row id="pictures-main" style={{ marginTop: 20 }}>
        <Col>
          <div
            style={{
              width: "100%",
              height: 400,
              position: "relative",
              display: "block",
            }}
          >
            <Image
              src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/sites/${disco.pictures[0]}`}
              alt={disco.name}
              style={{ objectFit: "cover" }}
              fill
              priority
              sizes="100vw"
            />
          </div>
        </Col>
      </Row>

    {disco.pictures.length > 1 && (
      <Row id="pictures-secondary" style={{ marginTop: 10 }}>
        <Col>
          {disco.pictures.slice(1, 5).map((m, i) => (
            <div
              key={i}
              style={{
                display: "inline-block",
                position: "relative",
                width: 160,
                height: 90,
              }}
            >
              <Image
                src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/sites/${m}`}
                className="pe-1"
                alt={disco.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,25vw"
              />
            </div>
          ))}
          {disco.pictures.length > 4 && (
            <div
              style={{
                textDecoration: "underline",
                width: 160,
                height: 90,
                display: "inline-block",
                color: "grey",
                textAlign: "center",
                verticalAlign: "top",
                paddingTop: 30,
              }}
            >
              <DiscoMedia lang="fr" num={disco.pictures.length - 4} />
            </div>
          )}
        </Col>
      </Row>
    )}
  </section>
  );
};
