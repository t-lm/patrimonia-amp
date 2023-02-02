// ./comps/discopictures.js

// main disco pictures

import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  DiscoMedia
} from "../utils/dictionary";

export const DiscoPictures = (props) => {
  
  const medium = props.medium
  const media = props.media
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
              src={`/sites/${medium.id}`}
              alt={medium.description.fr}
              title={medium.description.fr}
              style={{ objectFit: "cover" }}
              fill
              priority
            />
          </div>
        </Col>
      </Row>

    {media.length > 0 && (
      <Row id="pictures-secondary" style={{ marginTop: 10 }}>
        <Col>
          {media.slice(0, 4).map((m, i) => (
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
                src={`/sites/${m.id}`}
                className="pe-1"
                alt={m.description.fr}
                title={m.description.fr}
                fill
                style={{ objectFit: "cover" }}
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
