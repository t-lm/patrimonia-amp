// ./comps/filterSites.js

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Cities = require("../utils/Cities.json");
const SiteFilter = require("../utils/SiteFilter.json");
const SiteTypes = require("../utils/SiteTypes.json");

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
            {Object.keys(Cities).map((x) => (
              <option key={x} value={x}>
                {Cities[x][lang]}
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
              <option value="">{SiteFilter["type"][lang]}</option>
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
              <option value="">{SiteFilter["when"][lang]}</option>
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
