// ./comps/filterSites.js

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SiteTypes = require("../utils/SiteTypes.json");
const Locations = require("../utils/Locations.json");

import { SiteFilter } from "../utils/dictionary";

export const SitesFilter = (props) => {

  const cb = props.cb;
  const lang = props.lang
  const FilterPeriodOptions = props.FilterPeriodOptions

  return (
    <div
      style={{
        fontSize: "0.9rem",
        border: "1px solid #eee",
        backgroundColor: "pink",
        padding: 15,
        marginTop: 20,
        color: "black"
      }}
      
    >
      <Form>

        {/* site geography */}
        <Row>
          <Col xs={12} sm={8} md={6}>
          <Form.Select size="sm" onChange={() => cb({ location: "beziers" })}>
            {Object.keys(Locations).map((x) => (
              <option key={x} value={x}>
                {Locations[x][lang]}
              </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
        
        {/* site types */}
        <Row style={{paddingTop: 10}}>
          <Col xs={12} sm={6} md={4}>
            <Form.Select
              size="sm"
              onChange={(e) => cb({ type: e.target.value })}
            >
              <option value="">{SiteFilter[lang]["type"]}</option>
              {Object.keys(SiteTypes).map((x) => (
                <option key={x} value={x}>
                  {SiteTypes[x][lang]}
                </option>
              ))}
            </Form.Select>
          </Col>

        {/* Site periods */}
          <Col xs={12} sm={6} md={4}>
            <Form.Select
              size="sm"
              onChange={(e) => cb({ periodOption: e.target.value })}
            >
              <option value="">{SiteFilter[lang]["when"]}</option>
              {Object.keys(FilterPeriodOptions).map((x) => (
                <option key={x} value={x}>
                  {FilterPeriodOptions[x][lang]}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
