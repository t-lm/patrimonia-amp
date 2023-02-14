// ./comps/sitepictures.js

import React, { useState } from "react";
import Image from "next/image";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { PictureCarousel } from "./carousel";

import { SiteMedia } from "../utils/dictionary";
const Keys = require("../utils/Keys.json");

export const SitePictures = (props) => {
  
  const site = props.site;
  const media = props.media;
  const lang = props.lang;

  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <div style={{ color: "black" }}>
      {/* top pic */}

      <div
        style={{
          marginTop: 20,
          width: "100%",
          height: 400,
          position: "relative",
          display: "block",
          sizes: "100vw"
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
          sizes="100vw"
        />
      </div>

      {/* supporting pics */}
      <div style={{ marginTop: 10 }}>
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
              sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,25vw"
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
            <SiteMedia lang={lang} num={media.length - 5} />
          </div>
        )}
      </div>

      {/* Carousel */}
      <Modal show={showCarousel} onHide={() => setShowCarousel(false)}>
        <Modal.Body>
          <PictureCarousel media={media} />
        </Modal.Body>
        <Modal.Footer style={{ border: "0px" }}>
          <Button
            size="sm"
            variant="link"
            style={{ color: "grey", width: "20%", border: "0px" }}
            onClick={() => setShowCarousel(false)}
          >
            {Keys["close"][lang]}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
