// ./comps/discolist.js

import React from "react";

import { DiscoPill } from "./discopill";
import { Keys } from "../utils/dictionary";

const LANG = "fr";

export const DiscosList = (props) => {
  
  const discos = props.discos;
  const allGuides = props.allGuides;
  const allSites = props.allSites;
  const showHeaders = props.showHeaders

  return (
    <>
      {/* events */}
      {discos
        .filter((x) => x.type === "event")
        .map((v, j) => (
          <div key={j}>
            {j == 0 && showHeaders && (
              <div
                style={{
                  fontSize: "1rem",
                  padding: "5px 10px",
                  fontWeight: "bold",
                  borderRadius: 5,
                  marginBottom: 10,
                  backgroundColor: "pink"
                }}
              >
                {Keys[LANG]["discosEvent"]}
              </div>
            )}
            <DiscoPill
              key={v.id}
              num={j}
              disco={v}
              allGuides={allGuides}
              allSites={allSites}
            />
          </div>
        ))}

      {/* regular */}

      {discos
        .filter((x) => x.type === "regular")
        .map((v, j) => (
          <div key={j}>
            {j == 0 && showHeaders && (
              <div
                style={{
                  padding: "5px 10px",
                  fontWeight: "bold",
                  borderRadius: 5,
                  marginTop: 10,
                  marginBottom: 10,
                  backgroundColor: "#e2e2d7"
                }}
              >
                {Keys[LANG]["discosRegular"]}
              </div>
            )}
            <DiscoPill
              key={v.id}
              num={j}
              disco={v}
              allGuides={allGuides}
              allSites={allSites}
            />
          </div>
        ))}

      {/* demand */}
      {discos
        .filter((x) => x.type === "demand")
        .map((v, j) => (
          <div key={j} style={{marginTop: 10,
          marginBottom: 10}}>
            {j == 0 && showHeaders && (
              <div
                style={{
                  padding: "5px 10px",
                  fontWeight: "bold",
                  borderRadius: 5,
                  backgroundColor: "#fcc933"
                }}
              >
                {Keys[LANG]["discosDemand"]}
              </div>
            )}
            <DiscoPill
              num={j}
              disco={v}
              allGuides={allGuides}
              allSites={allSites}
            />
          </div>
        ))}
    </>
  );
};
