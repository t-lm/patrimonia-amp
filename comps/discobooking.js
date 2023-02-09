// ./comps/discobooking.js
// booking module

import React, { useState } from "react";
import { Keys } from "../utils/dictionary";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { FormattedDateAndTime } from "./date";
const Weekdays = require("../utils/Weekdays.json");

const LANG = "fr";

export const DiscoBooking = (props) => {
  const disco = props.disco;

  const today = new Date();
  today.setUTCHours(1);
  const dayToday = today.getDay();
  const [showModal, setShowModal] = useState(false);

  const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

  const Day = (props) => {
    const d = props.day
    const slots = props.slots

    return (
      <Row style={{paddingLeft: 10}}>
        <Col xs={3}>{Weekdays[d][LANG]}</Col>
        <Col xs={9}>
          {(!slots || slots.length === 0)
            ? "Fermé"
            : slots.map((s, j) => (
                <span key={j} style={{ marginRight: 10 }}>
                  {s[0]} - {s[1]}
                  {j < slots.length - 1 && ","}
                </span>
              ))}
        </Col>
      </Row>
    );
  };

  return (
    <>
      <section
        style={{
          backgroundColor: "white",
          padding: "10px 10px",
          marginTop: 30,
        }}
      >
        <h3 style={{ marginBottom: 20, fontWeight: "bold" }}>
          {Keys[LANG].nextDates}
        </h3>

        {disco.type === "demand" && (
          <Row style={{ margin: "5px 3px" }}>
            <Col xs={8} style={{ marginTop: 3, padding: "5.625px 0px" }}>
              {disco.demandCommentary
                ? disco.demandCommentary
                : Keys[LANG]["onDemandDefault"]}
            </Col>
            <Col xs={4} style={{ marginTop: 3, textAlign: "right" }}>
              <Button
                style={{
                  color: "black",
                  backgroundColor: "pink",
                  border: "1px solid pink",
                }}
                onClick={() => setShowModal(true)}
              >
                {Keys[LANG]["makeARequest"]}
              </Button>
            </Col>
          </Row>
        )}

        {disco.type === "regular" && (
          <>
            <Row>
              <Col>
                {disco.datesCommentary
                  ? disco.datesCommentary
                  : Keys[LANG]["onSiteDefault"]}
              </Col>
            </Row>
            <Row style={{ marginTop: 20, textAlign: "left", color: "grey" }}>
              <Col>
                {week.map((x, i) => (
                  <div key={i} style={{backgroundColor: (i+1%7 === dayToday) ? "pink" : "white", color: (i+1%7 === dayToday) ? "black" : "grey", fontWeight: (i+1%7 === dayToday) ? "bold" : "normal"}}>
                    <Day day={x} slots={disco.openingHours[x]} />
                  </div>
                ))}
              </Col>
            </Row>
          </>
        )}

        {disco.type === "event" &&
          disco.dates &&
          Array.isArray(disco.dates) && (
            <>
              {disco.dates.filter((d) => new Date(d.start) >= today).length ===
              0 ? (
                <>{Keys[LANG]["setNoDate"]}</>
              ) : (
                disco.dates
                  .filter((d) => new Date(d.start) >= today)
                  .map((date, i) => (
                    <Row
                      key={i}
                      style={{
                        margin: "5px 3px",
                        borderRadius: 3,
                        borderTop: i > 0 && "1px solid #eee",
                      }}
                    >
                      <Col
                        xs={8}
                        style={{ marginTop: 3, padding: "5.625px 0px" }}
                      >
                        <FormattedDateAndTime dateString={date.start} />
                      </Col>
                      <Col xs={4} style={{ marginTop: 3, textAlign: "right" }}>
                        <Button
                          style={{
                            color: "black",
                            backgroundColor: "pink",
                            border: "1px solid pink",
                          }}
                          onClick={() => setShowModal(true)}
                        >
                          {disco.bookingRequired
                            ? Keys[LANG]["book"]
                            : Keys[LANG]["bookNo"]}
                        </Button>
                      </Col>
                    </Row>
                  ))
              )}
            </>
          )}
      </section>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
          <p>{Keys[LANG]["bookingTemp"]}</p>
          <p>
            {Keys[LANG]["bookingTemp2"]} {disco.organiser.name}{" "}
            {Keys[LANG]["here"]}:
          </p>
          <ul>
            {disco.organiser.www && (
              <li>
                <a href={disco.organiser.www}>{disco.organiser.www}</a>
              </li>
            )}
            {disco.organiser.email && (
              <li>
                <a href={`mailto:${disco.organiser.email}`}>
                  {disco.organiser.email}
                </a>
              </li>
            )}
            {disco.organiser.phone && <li>{disco.organiser.phone}</li>}
            {disco.organiser.address && (
              <li>
                {disco.organiser.address.street}, {disco.organiser.address.city}
              </li>
            )}
          </ul>
          <Button
            style={{ backgroundColor: "pink", color: "black", border: "0px" }}
            onClick={() => setShowModal(false)}
          >
            {Keys[LANG]["close"]}
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};
