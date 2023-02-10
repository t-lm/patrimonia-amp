// ./comps/carousel.js

import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

export const PictureCarousel = ({ media }) => {
  return (
    <Carousel style={{ width: "auto", height: "auto" }}>
      {media &&
        media.map((p, i) => (
          <Carousel.Item key={i}>
            <div
              style={{
                width: "100%",
                height: 450,
                position: "relative",
                display: "block"
              }}
            >
              <Image
                src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/sites/${p.id}`}
                alt={p.description_fr}
                title={p.description_fr}
                fill
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
            <Carousel.Caption>
              <p
                style={{
                  backgroundColor: "pink",
                  color: "black",
                  borderRadius: 5,
                }}
              >
                {p.description_fr}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};
