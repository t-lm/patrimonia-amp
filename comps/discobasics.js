// ./comps/discobasics.js

import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

const lang = "fr";
const DiscoSubjects = require("../utils/DiscoSubjects.json");

export const DiscoBasics = (props) => {
  const disco = props.disco;
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
      <h1 style={{ marginBottom: 0 }} className={utilStyles.heading2Xl}>
        {disco.name}
      </h1>
      <div
        style={{
          fontWeight: "bold",
          marginTop: 5,
          fontSize: "1.1rem",
        }}
      >
        <span>
          {disco.address.city} .{" "}
          <Link
            style={{ color: "black" }}
            href={`/organisers/${disco.organiser.id}`}
          >
            {disco.organiser.name}
          </Link>
          <Image
            src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/organisers/${disco.organiser.id}`}
            className="rounded"
            alt={disco.organiser.name}
            title={disco.organiser.name}
            width={30}
            height={30}
            style={{
              objectFit: "cover",
              border: "1px solid #eee",
              padding: 0,
              display: "inline-block",
              marginLeft: 10,
            }}
          />
        </span>
      </div>

      <span
        style={{
          color: "black",
          fontSize: "1.1rem",
          fontWeight: "bold",
        }}
      >
        <Link style={{ color: "black" }} href={`/sites/${disco.siteID}`}>
          {disco.site.name}
        </Link>
      </span>

      {disco.subjects && (
        <div style={{ marginTop: 10 }}>
          {disco.subjects.map((sub, i) => (
            <span
              key={sub}
              style={{
                backgroundColor: `rgba(${DiscoSubjects[sub]["r"]}, ${DiscoSubjects[sub]["g"]}, ${DiscoSubjects[sub]["b"]}, 0.4)`,
                color: "black",
                fontSize: "0.8rem",
                padding: 4,
                borderRadius: 4,
                marginLeft: i > 0 ? 7 : 0,
              }}
            >
              {sub in DiscoSubjects && <span>{DiscoSubjects[sub][lang]}</span>}
            </span>
          ))}
        </div>
      )}

      <h5 style={{ marginTop: 20, color: "#666" }}>{disco.headline}</h5>
    </div>
  );
};
