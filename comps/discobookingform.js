// ./comps/discobookingform.js
// booking module

import React, { useState } from "react";

import { API } from "aws-amplify";
import { createRequest } from "../src/graphql/mutations";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FormattedDateAndTime } from "./date";

import { nanoid } from "nanoid";

const Keys = require("../utils/Keys.json");
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "12+"];

export const DiscoBookingForm = (props) => {
  
  const disco = props.disco;
  const lang = props.lang;
  const showModal = props.showModal;
  const selectedDate = props.selectedDate;
  const cb = props.cb;
  const today = new Date();

  const [request, setRequest] = useState({name: "", email: "", numberPersons: 1, discoName: disco.name, locale: lang, discoID: disco.id, organiserID: disco.organiserID, discoDate: selectedDate, type: disco.type});
  const [thanks, setThanks] = useState(false)
  const [error, setError] = useState(false)

  const handleCreateRequest = async (event) => {
    event.preventDefault();

    if (request.name === "") return setError("errorDiscoFormName")
    if (request.email === "") return setError("errorDiscoFormEmail")

    let input = { id: nanoid(8), ...request }
    try {
      //API.graphql({ query: createMessage, variables: { input }, authMode: 'AWS_IAM'})
      await API.graphql({ authMode: "AWS_IAM", query: createRequest, variables: { input }});
      setThanks(true)
    } catch (e) {
      console.error(e);
      setError("errorForm");
    }
  };


  return (
    <Modal
      show={showModal}
      onHide={() => { cb(false); setError(false)}}
      centered
      style={{ color: "black" }}
    >
      <Modal.Header closeButton>
        <Modal.Title style={{fontWeight: "bold"}}>{Keys["request"][lang]}</Modal.Title>
      </Modal.Header>
      {thanks === true ? 
        <Modal.Body>
          {Keys["yourRequestWasSent"][lang]}
        </Modal.Body>
      :
      <Modal.Body>
        <Form style={{ fontSize: "0.9rem" }}>

          {/* email */}
          <Form.Group as={Row} style={{ marginTop: 10 }}>
            <Col>
              <Form.Label>{Keys["yourName"][lang]}</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Control
                type="text"
                onChange={(e) =>
                  { setRequest({ ...request, name: e.target.value }); setError(false) }
                }
                value={request.name}
                size="sm"
              />
            </Col>
          </Form.Group>

          {/* email */}
          <Form.Group as={Row} style={{ marginTop: 10 }}>
            <Col>
              <Form.Label>{Keys["yourEmail"][lang]}</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Control
                type="text"
                onChange={(e) =>
                  {setRequest({ ...request, email: e.target.value }); setError(false) }
                }
                value={request.email}
                size="sm"
              />
            </Col>
          </Form.Group>
          
          {/* number of persons */}
          <Form.Group as={Row} style={{ marginTop: 10 }}>
            <Col>
              <Form.Label>{Keys["numberPersons"][lang]}</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Select
                as="select"
                size="sm"
                defaultValue={request.numberPersons}
                onChange={(e) => setRequest({ ...request, numberPersons: e.target.value })}
              >
                {Numbers.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>
          
          {/* selected date */}
          {disco.type === "event" &&
            <Form.Group as={Row} style={{ marginTop: 10 }}>
              <Col>
                <Form.Label>{Keys["date"][lang]}</Form.Label>
              </Col>
              <Col sm="9">
                <Form.Select
                  as="select"
                  size="sm"
                  defaultValue={selectedDate}
                  onChange={(e) =>
                    { setRequest({ ...request, discoDate: e.target.value }); setError(false) }
                  }
                >
                  {disco.dates.filter((d) => new Date(d.start) >= today).map((x) => (
                    <option key={x.start} value={x.start}>
                      <FormattedDateAndTime dateString={x.start} lang={lang} />
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
          }

          <Form.Group
            as={Row}
            style={{
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <Col>
              <Form.Label>{Keys["Message"][lang]}</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) =>
                  { setRequest({ ...request, body: e.target.value }); setError(false) }
                }
                value={request.body}
                size="sm"
              />
            </Col>
          </Form.Group>
              {error && <div style={{margin: "10px 0px"}}>{Keys[error][lang]}</div>}
            <Button
            style={{ backgroundColor: "pink", color: "black", border: "0px" }}
            onClick={(e) => handleCreateRequest(e)}
          >
            {Keys["send"][lang]}
          </Button>
        </Form>

      </Modal.Body>
        } 
    </Modal>
  );
};
