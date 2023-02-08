// ./comps/filterdiscos.js

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { FormattedMonth } from "./date";

const LANG = "fr";
const DiscoTypes = require("../utils/DiscoTypes.json");
const DiscoSubjects = require("../utils/DiscoSubjects.json");
const DiscoAudiences = require("../utils/DiscoAudiences.json");

const today = new Date();
const month = today.getMonth();
const dates = [0, 1, 2, 3, 4, 5].map((x) => {
  today.setUTCMonth(month + x);
  return today.toISOString().slice(0, 10);
});

export const DiscosFilter = (props) => {
  const filter = props.filter;
  const cb = props.cb

  return (
    <div
      style={{
        fontSize: "0.9rem",
        padding: 15,
        border: "1px solid #eee",
        backgroundColor: "white",
        marginTop: 20,
      }}
    >
      {/* months */}
      <Row>
        <Col>
          {dates.map((m, i) => (
            <Button
              key={i}
              style={{
                backgroundColor:
                  !filter || !filter.month
                    ? "#e2e2d7"
                    : filter && filter.month === m
                    ? "#e2e2d7"
                    : "white",
                fontSize: "0.9rem",
                fontWeight: "bold",
                padding: "4px 10px",
                borderRadius: 4,
                marginLeft: i > 0 ? 7 : 0,
                marginTop: 5,
                border: 0,
                color: "black",
              }}
              onClick={() => cb({ month: filter && filter.month ? "" : m})}
            >
              <FormattedMonth dateString={m} />
            </Button>
          ))}
        </Col>
      </Row>

      {/* site geography */}
      <Form>
      <Row style={{ marginTop: 10 }}>
        <Col xs={12} sm={6} md={4}>
          <Form.Select
            size="sm"
            onChange={() => cb({ region: "beziers" })}
            type
          >
            <option>Béziers et ses environs</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Disco types */}
        <Row style={{ marginTop: 10 }}>
          <Col xs={12} sm={6} md={4}>
            <Form.Select
              size="sm"
              onChange={(e) => cb({ type: e.target.value })}
            >
              <option value="">Type de découverte</option>
              {Object.keys(DiscoTypes).map((x) => (
                <option key={x} value={x}>
                  {DiscoTypes[x][LANG]}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Form.Select
              size="sm"
              onChange={(e) => cb({ subject: e.target.value })}
            >
              <option value="">Sujet</option>
              {Object.keys(DiscoSubjects).map((x) => (
                <option key={x} value={x}>
                  {DiscoSubjects[x][LANG]}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Form.Select
              size="sm"
              onChange={(e) => cb({ audience: e.target.value })}
            >
              <option value="">Pour qui</option>
              {Object.keys(DiscoAudiences).map((x) => (
                <option key={x} value={x}>
                  {DiscoAudiences[x][LANG]}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
