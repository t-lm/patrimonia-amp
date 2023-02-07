// ./comps/filterSites.js

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        padding: 20,
      }}
    >
      <Form>

        {/* site geography */}
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Form.Select
              size="sm"
              onChange={() => {
                if (filter && filter.region) cb({ region: "beziers" });
                else cb({ region: "beziers" });
              }}
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
              defaultValue="cathedrale-saint-nazaire-beziers"
              onChange={(e) => cb({ type: e.target.value })}
            >
              <option value="">Style du bâtiment</option>
              {Object.keys(SiteTypes).map((x) => (
                <option key={x} value={x}>
                  {SiteTypes[x][LANG]}
                </option>
              ))}
            </Form.Select>
          </Col>

        {/* Site periods */}
          <Col xs={12} sm={6} md={4}>
            <Form.Select
              size="sm"
              defaultValue="cathedrale-saint-nazaire-beziers"
              onChange={(e) => cb({ period: e.target.value })}
            >
              <option value="">Période architecturale</option>
              {Object.keys(SitePeriods).map((x) => (
                <option key={x} value={x}>
                  {SitePeriods[x][LANG]}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
