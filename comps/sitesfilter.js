// ./comps/filterSites.js

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LANG = "fr";
const SiteTypes = require("../utils/SiteTypes.json");
const { Icons } = require("../utils/icons");

export const SitesFilter = (props) => {

  const cb = props.cb;
  const FilterPeriodOptions = props.FilterPeriodOptions

  return (
    <div
      style={{
        fontSize: "0.9rem",
        border: "1px solid #eee",
        backgroundColor: "pink",
        padding: 20,
      }}
      
    >
      <Form>

        {/* site geography */}
        <Row>
          <Col xs={12} sm={8} md={6}>
            <Form.Select
              size="sm"
              onChange={() => cb({ region: "beziers" })}
              type
            >
              <option>Béziers et ses environs</option>
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
              <option value="">Type de bâtiment</option>
              {Object.keys(SiteTypes).map((x) => (
                <option dataIcon={Icons[x]} key={x} value={x}>
                  {SiteTypes[x][LANG]}
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
              <option value="">Période architecturale</option>
              {Object.keys(FilterPeriodOptions).map((x) => (
                <option key={x} value={x}>
                  {FilterPeriodOptions[x][LANG]}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
