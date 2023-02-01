// ./comps/filterVisits.js

import Form from "react-bootstrap/Form";
import { Keys } from "../utils/dictionary";

const LANG = "fr";
const VisitTypes = require("../utils/VisitTypes.json");
const VisitSubjects = require("../utils/VisitSubjects.json");
const VisitAudiences = require("../utils/VisitAudiences.json");

export const FilterVisits = (props) => {
  const filter = props.filter;
  const cb = props.cb;

  return (
    <div
      style={{
        fontSize: "0.9rem",
        padding: 15,
        border: "1px solid #eee",
        backgroundColor: "white",
        margin: 0
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          paddingBottom: 5,
          borderBottom: "1px solid #eee",
        }}
      >
        {Keys[LANG].filter}
      </div>

      {/* Visit types */}
      <div style={{ margin: "20px 0px 10px", fontWeight: "bold" }}>
        {Keys[LANG].visitTypes}
      </div>
      <Form>
        {Object.keys(VisitTypes).map((t, i) => (
          <Form.Check
            key={i}
            label={VisitTypes[t][LANG]}
            onChange={() => {
              if (filter && filter.type === t) {
                cb({ type: null });
              } else cb({ type: t });
            }}
            type="checkbox"
            checked={filter && filter.type === t}
          />
        ))}
      </Form>

      {/* Visit subjects */}
      <div style={{ margin: "20px 0px 10px", fontWeight: "bold" }}>
        {Keys[LANG].visitSubjects}
      </div>
      <Form>
        {Object.keys(VisitSubjects).map((t, i) => (
          <Form.Check
            key={i}
            label={VisitSubjects[t][LANG]}
            onChange={() => {
              if (filter && filter.subject === t) {
                cb({ subject: null });
              } else cb({ subject: t });
            }}
            type="checkbox"
            checked={filter && filter.subject === t}
          />
        ))}
      </Form>

      {/* Visit audiences */}
      <div style={{ margin: "20px 0px 10px", fontWeight: "bold" }}>
        {Keys[LANG].visitAudiences}
      </div>
      <Form>
        {Object.keys(VisitAudiences).map((t, i) => (
          <Form.Check
            key={i}
            label={VisitAudiences[t][LANG]}
            onChange={(x) => {
              if (filter && filter.audience === t) {
                cb({ audience: null });
              } else cb({ audience: t });
            }}
            type="checkbox"
            checked={filter && filter.audience === t}
          />
        ))}
      </Form>
    </div>
  );
};
