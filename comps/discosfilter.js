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

let today = new Date();
const todayString = today.toISOString().slice(0, 10)
const month = today.getMonth();
const startPeriods = [0, 1, 2, 3, 4, 5].map((x) => {
  let today = new Date();
  let month = today.getMonth();
  today.setUTCMonth(month + x);
  today.setDate(1);
  return today.toISOString().slice(0, 10);
});
const endPeriods = [1, 2, 3, 4, 5, 6].map((x) => {
  let today = new Date();
  let month = today.getMonth();
  today.setUTCMonth(month + x);
  today.setDate(0);
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
          <Button
                style={{
                  backgroundColor:
                      filter.periodType === "day" && filter.startPeriod === todayString
                      ? "#e2e2d7"
                      : "white",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  padding: "4px 10px",
                  borderRadius: 4,
                  marginTop: 5,
                  border: 0,
                  color: "black",
                }}
                onClick={() => cb({ periodType: "day", startPeriod: filter.startPeriod === todayString ? "" : todayString, endPeriod: filter.endPeriod === todayString ? "" : todayString})}
              >
                Aujourd'hui
          </ Button>
          {startPeriods.map((m, i) => (
            <Button
              key={i}
              style={{
                backgroundColor:
                   filter.periodType === "month" && filter.startPeriod === m
                    ? "#e2e2d7"
                    : "white",
                fontSize: "0.9rem",
                fontWeight: "bold",
                padding: "4px 10px",
                borderRadius: 4,
                marginLeft: 7,
                marginTop: 5,
                border: 0,
                color: "black",
              }}
              onClick={() => cb({ periodType: "month", startPeriod: filter.startPeriod === m ? "" : m, endPeriod: filter.endPeriod === endPeriods[i] ? "" : endPeriods[i]})}
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
