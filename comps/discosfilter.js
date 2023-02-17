// ./comps/discosfilter.js

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { FormattedMonth } from "./date";


const DiscoAudiences = require("../utils/DiscoAudiences.json");
const DiscoFilter = require("../utils/DiscoFilter.json");
const DiscoTypes = require("../utils/DiscoTypes.json");
const DiscoSubjects = require("../utils/DiscoSubjects.json");
const Keys = require("../utils/Keys.json");
const Locations = require("../utils/Locations.json");

let today = new Date();
const todayString = today.toISOString().slice(0, 10);
let day = today.getDate();
today.setDate(day + 1);
const tomorrowString = today.toISOString().slice(0, 10);
today.setDate(day + 6);
const nextWeekString = today.toISOString().slice(0, 10);
const startPeriods = [0, 1, 2].map((x) => {
  let today = new Date();
  let month = today.getMonth();
  today.setUTCMonth(month + x);
  today.setDate(1);
  return today.toISOString().slice(0, 10);
});
const endPeriods = [1, 2, 3].map((x) => {
  let today = new Date();
  let month = today.getMonth();
  today.setUTCMonth(month + x);
  today.setDate(0);
  return today.toISOString().slice(0, 10);
});

export const DiscosFilter = (props) => {
  const filter = props.filter;
  const cb = props.cb;
  const lang = props.lang

  return (
    <div
      style={{
        padding: 15,
        border: "1px solid #eee",
        backgroundColor: "white",
        marginTop: 20,
        color: "black",
      }}
    >
      {/* dates */}
        {/* this week */}
        <Button
        style={{
          backgroundColor:
            filter.periodRange === "thisweek" &&
            filter.startPeriod === todayString &&
            filter.endPeriod === nextWeekString
              ? "#e2e2d7"
              : "white",
          fontWeight: "bold",
          padding: "4px 10px",
          borderRadius: 4,
          marginTop: 5,
          border: 0,
          color: "black",
          fontSize: "0.8rem",
        }}
        onClick={() =>
          cb({
            periodRange: "thisweek",
            startPeriod: todayString,
            endPeriod: nextWeekString,
          })
        }
      >
        {Keys["sevendays"][lang]}
      </Button>
      {" | "}
      {/* today */}
      <Button
        style={{
          backgroundColor:
            filter.periodRange === "today" &&
            filter.startPeriod === todayString &&
            filter.endPeriod === todayString
              ? "#e2e2d7"
              : "white",
          fontWeight: "bold",
          padding: "4px 10px",
          borderRadius: 4,
          marginTop: 5,
          border: 0,
          color: "black",
          fontSize: "0.8rem",
        }}
        onClick={() =>
          cb({
            periodRange: "today",
            startPeriod: todayString,
            endPeriod: todayString,
          })
        }
      >
        {Keys["today"][lang]}
      </Button>
      {/* tomorrow */}
      <Button
        style={{
          backgroundColor:
            filter.periodRange === "tomorrow" &&
            filter.startPeriod === tomorrowString
              ? "#e2e2d7"
              : "white",
          fontWeight: "bold",
          padding: "4px 10px",
          borderRadius: 4,
          marginTop: 5,
          border: 0,
          color: "black",
          fontSize: "0.8rem",
        }}
        onClick={() =>
          cb({
            periodRange: "tomorrow",
            startPeriod: tomorrowString,
            endPeriod: tomorrowString,
          })
        }
      >
        {Keys["tomorrow"][lang]}
      </Button>
      {" | "}
      {startPeriods.map((m, i) => (
        <Button
          key={i}
          style={{
            backgroundColor:
              filter.periodRange === "month" && filter.startPeriod === m
                ? "#e2e2d7"
                : "white",
            fontSize: "0.8rem",
            fontWeight: "bold",
            padding: "4px 10px",
            borderRadius: 4,
            marginLeft: 7,
            marginTop: 5,
            border: 0,
            color: "black",
          }}
          onClick={() =>
            cb({
              periodRange: "month",
              startPeriod: m,
              endPeriod: endPeriods[i],
            })
          }
        >
          <FormattedMonth dateString={m} lang={lang}/>
        </Button>
      ))}
      {" | "}
      <Button
        style={{
          backgroundColor:
            !filter.periodRange || !filter.startPeriod || !filter.endPeriod
              ? "#e2e2d7"
              : "white",
          fontWeight: "bold",
          padding: "4px 10px",
          borderRadius: 4,
          marginTop: 5,
          border: 0,
          color: "black",
          fontSize: "0.8rem",
        }}
        onClick={() =>
          cb({
            periodRange: "",
            startPeriod: "",
            endPeriod: "",
          })
        }
      >
         {Keys["all"][lang]}
      </Button>

      {/* site location */}
      <Form>
        <Row style={{ marginTop: 10 }}>
          <Col xs={12} sm={6} md={4}>
            <Form.Select size="sm" onChange={() => cb({ location: "beziers" })}>
            {Object.keys(Locations).map((x) => (
              <option key={x} value={x}>
                {Locations[x][lang]}
              </option>
              ))}
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
              <option value="">{DiscoFilter["type"][lang]}</option>
              {Object.keys(DiscoTypes).map((x) => (
                <option key={x} value={x}>
                  {DiscoTypes[x][lang]}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Form.Select
              size="sm"
              onChange={(e) => cb({ subject: e.target.value })}
            >
              <option value="">{DiscoFilter["subject"][lang]}</option>
              {Object.keys(DiscoSubjects).map((x) => (
                <option key={x} value={x}>
                  {DiscoSubjects[x][lang]}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Form.Select
              size="sm"
              onChange={(e) => cb({ audience: e.target.value })}
            >
              <option value="">{DiscoFilter["who"][lang]}</option>
              {Object.keys(DiscoAudiences).map((x) => (
                <option key={x} value={x}>
                  {DiscoAudiences[x][lang]}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
