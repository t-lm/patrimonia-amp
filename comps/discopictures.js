// ./comps/discopictures.js

import Image from "next/image";

import { DiscoMedia } from "../utils/dictionary";

export const DiscoPictures = (props) => {
  const disco = props.disco;

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px 10px",
        marginTop: 10,
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
              <DiscoMedia lang="fr" num={disco.pictures.length - 5} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
