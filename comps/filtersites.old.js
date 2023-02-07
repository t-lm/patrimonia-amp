// ./comps/filterSites.js

import Form from "react-bootstrap/Form";
import { Keys } from "../utils/dictionary";

const LANG = "fr";
const SiteTypes = require("../utils/SiteTypes.json");
const SitePeriods = require("../utils/SitePeriods.json");

export const FilterSites = (props) => {
  const filter = props.filter;
  const cb = props.cb;

  return (
    <div
      style={{
        fontSize: "0.9rem",
        border: "1px solid #eee",
        backgroundColor: "white",
        padding: 20
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
      <Form>
        {/* site types */}
        <div style={{ margin: "20px 0px 10px", fontWeight: "bold" }}>
          {Keys[LANG].siteTypes}
        </div>
        <div className="mb-3">
          {Object.keys(SiteTypes).map((t, i) => (
            <Form.Check
              key={i}
              label={SiteTypes[t][LANG]}
              onChange={() => {
                if (filter && filter.type === t) {
                  cb({type: null});
                } else cb({ type: t });
              }}
              type="checkbox"
              checked={filter && filter.type === t}
            />
          ))}
        </div>
      </Form>

      {/* Site periods */}
      <div style={{ margin: "20px 0px 10px", fontWeight: "bold" }}>
        {Keys[LANG].keyPeriods}
      </div>
      <Form>
        {Object.keys(SitePeriods).map((t, i) => (
          <Form.Check
            key={i}
            label={SitePeriods[t][LANG]}
            onChange={() => {
              if (filter && filter.period === t) {
                cb({ period: null });
              } else cb({ period: t });
            }}
            type="checkbox"
            checked={filter && filter.period === t}
          />
        ))}
      </Form>
      
    </div>
  );
};