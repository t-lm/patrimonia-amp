// ./comps/sitepictures.js

// main site pictures
import React, { useState } from "react";
import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { PictureCarousel } from "./carousel";

import { SiteMedia } from "../utils/dictionary";
import { Keys } from "../utils/dictionary";

const LANG = "fr"

export const SitePictures = (props) => {
  
  const site = props.site
  const media = props.media
  
  const [showCarousel, setShowCarousel] = useState(false);

  return (

    <section id="pictures">
    {/* top pic */}
    <Row style={{ marginTop: 20 }}>
      <Col>
        <div
          style={{
            width: "100%",
            height: 400,
            position: "relative",
            display: "block",
          }}
        >
          {/* rewrite all this with the picture */}
          <Image
            src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/sites/${site.picture.id}`}
            className="shadow-1-strong rounded"
            alt={site.picture.description_fr}
            title={site.name}
            onClick={() => setShowCarousel(true)}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </Col>
    </Row>

    {/* supporting pics */}
    <Row style={{ marginTop: 10 }}>
      <Col>
        {media.slice(0, 4).map((p, i) => (
          <div
            key={i}
            style={{
              width: 160,
              height: 90,
              position: "relative",
              display: "inline-block",
            }}
          >
            <Image
              src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/sites/${p.id}`}
              className="rounded pe-1"
              alt={p.description_fr}
              title={p.description_fr}
              onClick={() => setShowCarousel(true)}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
        {media.length > 5 && (
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
            onClick={() => setShowCarousel(true)}
          >
            <SiteMedia lang="fr" num={media.length - 5} />
          </div>
        )}
      </Col>
    </Row>

    {/* Carousel */}
    <Modal show={showCarousel} onHide={() => setShowCarousel(false)}>
      <Modal.Body>
        <PictureCarousel siteID={site.id} media={media} />
      </Modal.Body>
      <Modal.Footer style={{ border: "0px" }}>
        <Button
          size="sm"
          variant="link"
          style={{ color: "grey", width: "20%", border: "0px" }}
          onClick={() => setShowCarousel(false)}
        >
          {Keys[LANG].close}
        </Button>
      </Modal.Footer>
    </Modal>
  </section>


  );
};
