// comps/formmedia.js

import React, { useState } from "react";

import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify, API } from "aws-amplify";
import Storage from "@aws-amplify/storage";

import awsExports from "../src/aws-exports";
import { createMedia, updateMedia } from "../src/graphql/mutations";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Error } from "./error";

Amplify.configure({ ...awsExports, ssr: true });

const FormMedia = (props) => {
  const action = props.action;
  const [media, setMedia] = useState(props.input);
  const [newImage, setNewImage] = useState(false); 
  const [error, setError] = useState(false);

  const handleCreateMedia = async (event) => {
    event.preventDefault();

    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: createMedia,
        variables: {
          input: {
            id,
            description_fr: media["description_fr"],
            source: media["source"],
            copyright: media["copyright"],
          },
        },
      });

      window.location.href = `/media`;
    } catch ({ errors }) {
      console.error(...errors);
      setError("There is an error with this form");
    }
  };

  const handleUpdateMedia = async (event) => {
    event.preventDefault();

    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: updateMedia,
        variables: { input: media },
      });

      window.location.href = `/media`;
    } catch ({ errors }) {
      console.error(...errors);
      setError("There is an error with this form");
    }
  };

  const handleNewImage = () => {
    setError(false)

   // validation
   if (!(newImage)) return setError("Il n'y a pas d'image")
   if (!["image/png", "image/jpeg"].includes(newImage.type)) return setError("Le format de l'image n'est pas accepté")
   if (newImage.size > 300000) return setError("La taille de l'image doit être inférieure à 300KB")

   // save
   Storage.put(`${media.id}`, newImage, { contentType: 'image/png' })
   .then(res => window.location.href = `/media`)
   .catch(e => setError("Il y a eu un problème avec la base de données"))

  }
  

  return (
    <Authenticator>
      <h4 style={{ fontWeight: "bold" }}>
        {action === "add" && "Create media"}
        {action === "update" && "Update media"}
      </h4>
      <Form>
        
        <Form.Group as={Row} style={{ marginTop: 30 }}>
          <Col>
            <Form.Label>Image</Form.Label>
          </Col>
          <Col sm="9">
            {/*
            <Form.File
              id="custom-file"
              custom
              label="upload"
              onChange={(e) => setNewImage(e.target.files[0])}
            />
            {/*newImage ? (
              <img
                src={URL.createObjectURL(newImage)}
                style={{
                  height: 64,
                  float: "right",
                  marginTop: 20,
                  paddingBottom: 10,
                }}
              />
            ) : (
              <img
                src={`https://patrimonia-amp175328-dev.s3.eu-west-1.amazonaws.com/${media.id}`}
                style={{
                  height: 64,
                  float: "right",
                  marginTop: 20,
                  paddingBottom: 10,
                }}
              />
              )*/}
          </Col>
        </Form.Group>

        <Row style={{ marginTop: 30 }}>
          <Col>
            <Button
              onClick={() => handleNewImage()}
              style={{
                backgroundColor: "#25F1CE",
                color: "black",
                border: "0px solid #dedede",
                marginTop: 20,
                minWidth: 150,
                float: "right",
              }}
              className="ml-auto"
              size="sm"
            >
              Enregistrer
            </Button>
          </Col>
        </Row>

        <Form.Group as={Row} style={{ marginTop: 50 }}>
          <Col>
            <Form.Label>Site ID</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) => setMedia({ ...media, siteID: e.target.value })}
              value={media.siteID}
              size="sm"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 50 }}>
          <Col>
            <Form.Label>Description </Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) =>
                setMedia({ ...media, description_fr: e.target.value })
              }
              value={media.description_fr}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Source</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) => setMedia({ ...media, source: e.target.value })}
              value={media.source}
              size="sm"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Copyright</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) =>
                setMedia({ ...media, copyright: e.target.value })
              }
              value={media.copyright}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Button
          onClick={action === "add" ? handleCreateMedia : handleUpdateMedia}
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
          Save
        </Button>
      </Form>
      {error && <Error error={error} />}
    </Authenticator>
  );
};

export default FormMedia;
