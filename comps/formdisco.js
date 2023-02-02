// comps/formdisco.js

import React, { useState } from "react";

import Image from "next/image";

import { API } from "aws-amplify";
import { createDisco, updateDisco } from "../src/graphql/mutations";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Error } from "./error";

const DiscoSubjects = require("../utils/DiscoSubjects.json");
//const DiscoTypes = require("../utils/DiscoTypes.json");
const DiscoLanguages = require("../utils/DiscoLanguages.json");
const slugify = require("slugify");

const LANG = "fr";

const FormDisco = (props) => {
  const action = props.action;
  const [disco, setDisco] = useState(props.input);
  const [error, setError] = useState(false);

  const handleUpdateDiscoSubjects = (key) => {
    let index = disco.subjects.indexOf(key)
    let subjects = disco.subjects
    if (index > -1) { subjects.splice(index, 1); setDisco({...site, subjects }) }
    else if (disco.subjects.length > 0 ) { subjects.push(key); setDisco({...disco, subjects }) }
    else setDisco({...disco, subjects: [key]})
}

const handleUpdateDiscoLanguages = (key) => {
  let index = disco.languages.indexOf(key)
  let languages = disco.languages
  if (index > -1) { languages.splice(index, 1); setDisco({...site, languages }) }
  else if (disco.languages.length > 0 ) { languages.push(key); setDisco({...disco, languages }) }
  else setDisco({...disco, languages: [key]})
}

  const handleCreateDisco = async (event) => {
    event.preventDefault();

    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: createDisco,
        variables: {
          input: {
            id: slugify(disco["name"]).toLowerCase(),
            ...disco
          },
        },
      });

      window.location.href = `/discos`;
    } catch (e) {
      console.error(e);
      setError("Nous n'avons pu enregistrer cette découverte");
    }
  };

  const handleUpdateDisco = async (event) => {
    event.preventDefault();

    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: updateDisco,
        variables: { input: disco },
      });

      window.location.href = `/discos/${disco.id}`;
    } catch (e) {
      console.error(e);
      setError("Nous n'avons pu enregistrer cette découverte");
    }
  };

  return (
    <>
      <h4 style={{ fontWeight: "bold" }}>
        {action === "add" && "Créer la découverte"}
        {action === "update" && "Mettre à jour la découverte"}
      </h4>
      <Form style={{ fontSize: "0.9rem" }}>
        <Form.Group as={Row} style={{ marginTop: 50 }}>
          <Col>
            <Form.Label>Nom</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) => setDisco({ ...disco, name: e.target.value })}
              value={disco.name}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>En une phrase ...</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              as="textarea"
              rows={2}
              onChange={(e) => setDisco({ ...disco, headline: e.target.value })}
              value={disco.headline}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>L'identifiant de l'organisateur</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) => setDisco({ ...disco, organiserID: e.target.value })}
              value={disco.organiserID}
              size="sm"
            />
          </Col>
        </Form.Group>

        {/* Dates */}
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Date de début</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) =>
                setDisco({ ...disco, dateStart: e.target.value })
              }
              value={disco.dateStart}
              size="sm"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Date de fin</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) => setDisco({ ...disco, dateEnd: e.target.value })}
              value={disco.dateEnd}
              size="sm"
            />
          </Col>
        </Form.Group>

        {/* Pictures */}
        <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Identifiants des photos</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) => setDisco({ ...disco, pictures: e.target.value.split(",") })}
              value={disco.pictures.join(",")}
              size="sm"
            />
          </Col>
        </Form.Group>
        <Row
          style={{
            marginTop: 20,
            marginBottom: 20
          }}
        ><Col>
          {disco.pictures.map((x) => (
            <Image
              src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/${x}`}
              className="shadow-1-strong rounded"
              alt="alternative text"
              priority
              style={{ objectFit: "cover", marginRight: 10 }}
              display="block"
              width={100}
              height={100}
            />
          ))}
          </Col>
        </Row>
        
        <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Durée</Form.Label>
          </Col>
          <Col sm="9">
          <Form.Control
              required
              type="text"
              onChange={(e) => setDisco({ ...disco, duration: e.target.value.split(",") })}
              value={disco.duration.join(",")}
              size="sm"
            />
          </Col>
        </Form.Group>
        {/* Facts */}
        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Sujets</Form.Label>
          </Col>
          <Col sm="9">
            {Object.keys(DiscoSubjects).map((x) => (
              <Form.Check
                key={x}
                onChange={() => handleUpdateDiscoSubjects(x)}
                label={DiscoSubjects[x][LANG]}
                checked={disco.subjects && disco.subjects.includes(x)}
              />
            ))}
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Langues</Form.Label>
          </Col>
          <Col sm="9">
            {Object.keys(DiscoLanguages).map((x) => (
              <Form.Check
                key={x}
                onChange={() => handleUpdateDiscoLanguages(x)}
                label={DiscoLanguages[x][LANG]}
                checked={disco.languages && disco.languages.includes(x)}
              />
            ))}
          </Col>
        </Form.Group>

        {/* Adresse */}
        <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
        <b>Adresse</b>
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Rue</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) =>
                setDisco({
                  ...disco,
                  address: { ...disco.address, street: e.target.value },
                })
              }
              value={disco.address.street}
              size="sm"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Code postal</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) =>
                setDisco({
                  ...disco,
                  address: { ...disco.address, postalCode: e.target.value },
                })
              }
              value={disco.address.postalCode}
              size="sm"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Ville</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) =>
                setDisco({
                  ...disco,
                  address: { ...disco.address, city: e.target.value },
                })
              }
              value={disco.address.city}
              size="sm"
            />
          </Col>
        </Form.Group>



        <Button
          onClick={action === "add" ? handleCreateDisco : handleUpdateDisco}
          size="md"
          style={{
            marginTop: 50,
            backgroundColor: "pink",
            border: 0,
            color: "black",
            fontWeight: "bold",
            padding: "5px 30px",
          }}
        >
          Enregistrer
        </Button>
      </Form>
      {error && <Error error={error} />}
    </>
  );
};

export default FormDisco;
