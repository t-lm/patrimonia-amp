// ./comps/alldiscos.js

import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import { FilterDiscos } from "./filterdiscos";
import { DiscosList } from "./discoslist";

import { FormattedMonth } from "./date";
import { Keys } from "../utils/dictionary";

const LANG = "fr";

export const AllDiscos = ({ allDiscos }) => {
  const [filter, setFilter] = useState(false);
  const [discos, setDiscos] = useState(allDiscos);
  const [open, setOpen] = useState(true);

  const today = new Date();
  const month = today.getMonth();
  const dates = [1, 1, 1, 1, 1, 1].map((x, i) => {
    today.setUTCMonth(month + i);
    return today.toISOString().slice(0, 10);
  });

  const handleFilter = (f) => {
    let filt = { ...filter };
    filt[Object.keys(f)[0]] = f[Object.keys(f)[0]];
    setFilter(filt);

    return setDiscos(
      allDiscos
        .filter((x) => {
          if (filt.type) {
            return x.type === filt.type;
          } else return true;
        })
        .filter((x) => {
          if (filt.subject) {
            return x.subjects.includes(filt.subject);
          } else return true;
        })
        .filter((x) => {
          if (filt.audience) {
            return x.audiences.includes(filt.audience);
          } else return true;
        })
        .filter((x) => {
          if (filt.month) {
            let startPeriod = new Date(filt.month);
            startPeriod.setDate(1);
            startPeriod.setHours(1);
            let month = startPeriod.getMonth();
            let endPeriod = new Date(filt.month);
            endPeriod.setMonth(month + 1);
            endPeriod.setDate(0);
            endPeriod.setHours(23);
            return (
              new Date(x.dateStart) < endPeriod &&
              new Date(x.dateEnd) > startPeriod
            );
          } else return true;
        })
    );
  };

  useEffect(() => {
    if (window.innerWidth < 1200) setOpen(false);
  }, []);

  return (
    <>
      {/* filter months */}

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
              onClick={() => {
                if (filter && filter.month === m) {
                  handleFilter({ month: null });
                } else handleFilter({ month: m });
              }}
            >
              <FormattedMonth dateString={m} />
            </Button>
          ))}
        </Col>
      </Row>

      {/* main */}
      {!open && (
        <Button
          variant="link"
          style={{ color: "black", marginTop: 10, padding: 2 }}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {Keys[LANG]["filter"]}
        </Button>
      )}

      <Row style={{ marginTop: 30, padding: 5 }}>
        {/* Filters */}
        <Collapse in={open}>
          <Col md={3} style={{ padding: 0, marginBottom: 20 }}>
            <FilterDiscos cb={(x) => handleFilter(x)} filter={filter} />
          </Col>
        </Collapse>
        {/* Results */}
        <Col md={9} style={{ paddingLeft: 10 }}>
          <DiscosList
            discos={discos}
            showHeaders
          />
        </Col>
      </Row>
    </>
  );
};
