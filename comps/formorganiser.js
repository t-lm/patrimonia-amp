// comps/formorganiser.js

import React, { useState } from "react";

import { API, Storage } from "aws-amplify";
import {
  createOrganiser,
  updateOrganiser,
  deleteOrganiser,
} from "../src/graphql/mutations";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Error } from "./error";

const OrganiserTypes = require("../utils/OrganiserTypes.json");
const slugify = require("slugify");
const LANG = "fr"

const FormOrganiser = (props) => {
  const action = props.action;
  const [organiser, setOrganiser] = useState(props.input);
  const [newImage, setNewImage] = useState(false);
  const [error, setError] = useState(false);

  const handleCreateOrganiser = async (event) => {
    event.preventDefault();
    if (newImage) await handleNewImage();
    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: createOrganiser,
        variables: {
          input: { ...organiser, id: slugify(organiser["name"]).toLowerCase() },
        },
      });

      window.location.href = `/organisers`;
    } catch (e) {
      console.error(e);
      setError("There is an error with this form");
    }
  };

  const handleUpdateOrganiser = async (event) => {
    event.preventDefault();
    if (newImage) await handleNewImage();
    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: updateOrganiser,
        variables: { input: organiser },
      });
      window.location.href = `/organisers`;
    } catch (e) {
      console.error(e);
      setError("There is an error with this form");
    }
  };

  const handleDeleteOrganiser = async () => {
    try {
      await Storage.remove(`/organisers/${organiser.id}`);
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: deleteOrganiser,
        variables: { input: { id: organiser.id } },
      });
      window.location.href = `/admin/organiser`;
    } catch (e) {
      console.error(e);
      setError("There is an error with this form");
    }
  };

  const handleNewImage = async () => {
    setError(false);

    if (!newImage) return setError("Il n'y a pas d'image");
    if (!["image/png", "image/jpeg"].includes(newImage.type))
      return setError("Le format de l'image n'est pas accepté");
    if (newImage.size > 1000000)
      return setError("La taille de l'image doit être inférieure à 1MB");

    try {
      await Storage.put(`organisers/${organiser.id}`, newImage, {
        level: "public",
        contentType: newImage.type,
      });
    } catch (error) {
      console.error("L'image n'a pas pu être sauvée", error);
    }
  };

  return (
    <div style={{color: "black"}}>
      <h4 style={{ fontWeight: "bold" }}>
        {action === "add" && "Créer l'organisateur"}
        {action === "update" && "Mettre à jour l'organisateur"}
      </h4>

      <Row
        style={{
          marginTop: 50,
          fontSize: "0.9rem",
          color: "grey",
          fontWeight: "bold",
        }}
      >
        <Col>Identifiant</Col>
        <Col sm="9">{organiser.id}</Col>
      </Row>

      <Form style={{ fontSize: "0.9rem" }}>
        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Nom</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) =>
                setOrganiser({ ...organiser, name: e.target.value })
              }
              value={organiser.name}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Profil</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Select
              size="sm"
              defaultValue="cathedrale-saint-nazaire-beziers"
              onChange={(e) =>
                setOrganiser({ ...organiser, type: e.target.value })
              }
            >
              {Object.keys(OrganiserTypes).map((x) => (
                <option key={x} value={x}>
                  {OrganiserTypes[x][LANG]}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>

        {/* Description */}
        <Form.Group
          as={Row}
          style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid #ddd" }}
        >
          <Col>
            <Form.Label>Description</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              as="textarea"
              rows={10}
              onChange={(e) =>
                setOrganiser({ ...organiser, description_fr: e.target.value })
              }
              value={organiser.description_fr}
              size="sm"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Adresse web</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) =>
                setOrganiser({ ...organiser, www: e.target.value  })
              }
              value={organiser.www}
              size="sm"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Téléphone</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) =>
                setOrganiser({ ...organiser, phone: e.target.value })
              }
              value={organiser.phone}
              size="sm"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Email</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) =>
                setOrganiser({ ...organiser, email: e.target.value })
              }
              value={organiser.email}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Image</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="file"
              required
              name="file"
              onChange={(e) => setNewImage(e.target.files[0])}
              size="sm"
            />
            {newImage ? (
              <img
                src={URL.createObjectURL(newImage)}
                style={{
                  height: 120,
                  float: "right",
                  marginTop: 20,
                  paddingBottom: 10,
                }}
              />
            ) : (
              <img
                src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/organisers/${organiser.id}`}
                style={{
                  height: 120,
                  float: "right",
                  marginTop: 20,
                  paddingBottom: 10,
                }}
              />
            )}
          </Col>
        </Form.Group>

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
                setOrganiser({
                  ...organiser,
                  address: { ...organiser.address, street: e.target.value },
                })
              }
              value={organiser.address.street}
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
                setOrganiser({
                  ...organiser,
                  address: { ...organiser.address, postalCode: e.target.value },
                })
              }
              value={organiser.address.postalCode}
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
                setOrganiser({
                  ...organiser,
                  address: { ...organiser.address, city: e.target.value },
                })
              }
              value={organiser.address.city}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Button
          onClick={
            action === "add" ? handleCreateOrganiser : handleUpdateOrganiser
          }
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

        <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
        <Button
          onClick={() => handleDeleteOrganiser()}
          size="md"
          style={{
            marginTop: 10,
            backgroundColor: "white",
            border: "1px solid pink",
            color: "black",
            fontWeight: "bold",
            padding: "5px 30px",
            display: "block",
          }}
        >
          Supprimer
        </Button>
      </Form>
      {error && <Error error={error} />}
    </div>
  );
};

export default FormOrganiser;
