// ./comps/discobooking.js
//
// booking module

import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { FormattedDateAndTime } from "./date";
import { DiscoBookingForm } from "./discobookingform";

const Weekdays = require("../utils/Weekdays.json");
const Keys = require("../utils/Keys.json");

export const DiscoBooking = (props) => {
  const today = new Date();

  const disco = props.disco;
  const lang = props.lang;
  
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(disco.type === "event" ? disco.dates.filter((d) => new Date(d.start) >= today)[0]["start"] : '');

  
  today.setUTCHours(1);
  const dayToday = today.getDay();(false);
  const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  const Day = (props) => {
    const d = props.day;
    const slots = props.slots;

    return (
      
      <Row style={{ paddingLeft: 10 }}>
        <Col xs={3}>{Weekdays[d][lang]}</Col>
        <Col xs={9}>
          {!slots || slots.length === 0
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
      <div
        style={{
          backgroundColor: "white",
          padding: "10px 10px",
          marginTop: 30,
          color: "black"
        }}
      >
        {disco.type === "demand" && (
          <>
            <h3 style={{ marginBottom: 20, fontWeight: "bold" }}>
              {Keys["Booking"][lang]}
            </h3>
            <Row style={{ margin: "5px 3px" }}>
              <Col xs={8} style={{ marginTop: 3, padding: "5.625px 0px" }}>
                {disco.demandCommentary ? disco.demandCommentary : Keys["demandCommentaryDefault"][lang]}
              </Col>
              <Col xs={4} style={{ marginTop: 3, textAlign: "right" }}>
                <Button
                  style={{
                    color: "black",
                    backgroundColor: "pink",
                    border: "1px solid pink",
                    fontWeight: "bold"
                  }}
                  onClick={() => setShowModal(true)}
                >
                  {Keys["makeARequest"][lang]}
                </Button>
              </Col>
            </Row>
          </>
        )}

        {disco.type === "regular" && (
          <>
            <h3 style={{ marginBottom: 20, fontWeight: "bold" }}>
              {Keys["openingHours"][lang]}
            </h3>
            <div>{disco.datesCommentary && disco.datesCommentary}</div>
            <div style={{ marginTop: 20, textAlign: "left", color: "grey" }}>
              {week.map((x, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor:
                      (i + 1 % 7) === dayToday ? "pink" : "white",
                    color: (i + 1 % 7) === dayToday ? "black" : "grey",
                    fontWeight: (i + 1 % 7) === dayToday ? "bold" : "normal",
                  }}
                >
                  <Day day={x} slots={disco.openingHours[x]} />
                </div>
              ))}
            </div>
          </>
        )}

        {disco.type === "event" && (
          <>
            <h3 style={{ marginBottom: 20, fontWeight: "bold" }}>
              {Keys["nextDates"][lang]}
            </h3>

            {disco.dates.filter((d) => new Date(d.start) >= today).length ===
            0 ? <>{Keys["setNoDate"][lang]}</>
            : <>
                {disco.dates
                  .filter((d) => new Date(d.start) >= today)
                  .map((date, i) => (
                    <Row
                      key={i}
                      style={{
                        margin: "5px 3px",
                        borderRadius: 3,
                        borderTop: i > 0 ? "1px solid #eee" : "0px",
                      }}
                    >
                      <Col
                        xs={8}
                        style={{ marginTop: 3, padding: "5.625px 0px" }}
                      >
                        <FormattedDateAndTime dateString={date.start} lang={lang} />
                      </Col>
                      <Col xs={4} style={{ marginTop: 3, textAlign: "right" }}>
                        <Button
                          style={{
                            color: "black",
                            backgroundColor: "pink",
                            border: "1px solid pink",
                            minWidth: "150px",
                            fontWeight: "bold"
                          }}
                          onClick={() => { setShowModal(true), setSelectedDate(date.start)} }
                        >
                          {disco.bookingRequired
                            ? Keys["book"][lang]
                            : Keys["bookNo"][lang]}
                        </Button>
                      </Col>
                    </Row>
                  ))}
              </>
            }
          </>
        )}
      </div>

      <DiscoBookingForm showModal={showModal} disco={disco} lang={lang} selectedDate={selectedDate} cb={(state) => setShowModal(state)}/> 
    </>
  );
};
