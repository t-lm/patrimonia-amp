// ./comps/organiserbasics.js
import Image from "next/image";

const OrganiserTypes = require("../utils/OrganiserTypes.json");
const { Languages } = require("../utils/auth");

export const OrganiserBasics = (props) => {

  const organiser = props.organiser;
  const lang = props.lang

  return (
    <div
      id="basics"
      style={{
        backgroundColor: "white",
        padding: "10px 10px",
        marginTop: 30,
        color: "black"
      }}
    >
    <div>
        <Image
          src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/organisers/${organiser.id}`}
          className="rounded pe-1"
          alt={organiser.name}
          title={organiser.name}
          width={50}
          height={50}
          style={{
            objectFit: "cover",
            border: "1px solid #ddd",
            padding: 2,
          }}
        />
        <span
          style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: 15 }}
        >
          {organiser.name}
        </span>
    </div>
 
    <div
      style={{
        fontWeight: "bold",
        marginTop: 10,
        fontSize: "1.1rem",
      }}
    >
      {organiser.address && <span>{organiser.address.city}</span>}
      {organiser.type && (
        <span
          style={{
            marginLeft: 5,
            fontSize: "1.1rem",
          }}
        >
          .{" "}
          {organiser.type in OrganiserTypes &&
            OrganiserTypes[organiser.type][lang]}
        </span>
      )}
          </div>
          

    {organiser.description &&
      <div
        style={{
          display: "flexbox",
          alignItems: "center",
          marginTop: 20,
          whiteSpace: "pre-line"
        }}
      >
      {organiser[Languages.includes(lang) ? `description_${lang}` : "description"]}</div>
      }
      
    </div>
  );
};
