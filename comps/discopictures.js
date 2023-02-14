// ./comps/discopictures.js

import React, { useState } from "react";
import Image from "next/image";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { PictureCarousel } from "./carousel";

import { Keys, DiscoMedia } from "../utils/dictionary";
const { Languages } = require("../utils/auth");

export const DiscoPictures = (props) => {
  
  const disco = props.disco;
  const lang = props.lang;
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px 10px",
        marginTop: 30,
        color: "black",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 400,
          position: "relative",
          display: "block",
          marginTop: 20,
        }}
      >
        <Image
          src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/sites/${disco.pictures[0]}`}
          alt={disco.name}
          style={{ objectFit: "cover" }}
          fill
          priority
          sizes="(max-width: 768px) 100vw,100vw"
          onClick={() => setShowCarousel(true)}
        />
      </div>

      {disco.pictures.length > 1 && (
        <div style={{ marginTop: 10 }}>
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
                onClick={() => setShowCarousel(true)}
              />
            </div>
          ))}
          {disco.pictures.length > 5 && (
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
              <DiscoMedia lang={lang} num={disco.pictures.length - 5} />
            </div>
          )}
        </div>
      )}

        {/* Carousel */}
        <Modal show={showCarousel} onHide={() => setShowCarousel(false)}>
        <Modal.Body>
          <PictureCarousel media={disco.pictures.map(x => { return { "id": x}})} />
        </Modal.Body>
        <Modal.Footer style={{ border: "0px" }}>
          <Button
            size="sm"
            variant="link"
            style={{ color: "grey", width: "20%", border: "0px" }}
            onClick={() => setShowCarousel(false)}
          >
            {Keys[lang]["close"]}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
