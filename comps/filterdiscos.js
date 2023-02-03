// ./comps/filterdiscos.js

import Form from "react-bootstrap/Form";
import { Keys } from "../utils/dictionary";

const LANG = "fr";
const DiscoTypes = require("../utils/DiscoTypes.json");
const DiscoSubjects = require("../utils/DiscoSubjects.json");
const DiscoAudiences = require("../utils/DiscoAudiences.json");

export const FilterDiscos = (props) => {
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

      {/* Disco types */}
      <div style={{ margin: "20px 0px 10px", fontWeight: "bold" }}>
        {Keys[LANG].discoTypes}
      </div>
      <Form>
        {Object.keys(DiscoTypes).map((t, i) => (
          <Form.Check
            key={i}
            label={DiscoTypes[t][LANG]}
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

      {/* Disco subjects */}
      <div style={{ margin: "20px 0px 10px", fontWeight: "bold" }}>
        {Keys[LANG].discoSubjects}
      </div>
      <Form>
        {Object.keys(DiscoSubjects).map((t, i) => (
          <Form.Check
            key={i}
            label={DiscoSubjects[t][LANG]}
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

      {/* Disco audiences */}
      <div style={{ margin: "20px 0px 10px", fontWeight: "bold" }}>
        {Keys[LANG].discoAudiences}
      </div>
      <Form>
        {Object.keys(DiscoAudiences).map((t, i) => (
          <Form.Check
            key={i}
            label={DiscoAudiences[t][LANG]}
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
