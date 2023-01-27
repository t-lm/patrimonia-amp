// pages/form/site.js

import Head from "next/head";

import React, { useState } from "react";

import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify, API } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { createSite, updateSite } from "../src/graphql/mutations";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const slugify = require("slugify");

Amplify.configure({ ...awsExports, ssr: true });

const FormSite = (props) => {
  
  const action = props.action;
  const [site, setSite] = useState(props.input);
  
  const handleCreateSite = async (event) => {
    event.preventDefault();

    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: createSite,
        variables: {
          input: {
            id: slugify(site["name"]).toLowerCase(),
            name: site["name"],
            headline: site["headline"],
          },
        },
      });

      window.location.href = `/sites`;
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  };

  const handleUpdateSite = async (event) => {
    event.preventDefault();

    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: updateSite,
        variables: { input: site },
      });

      window.location.href = `/sites`;
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  };

  return (
    <Authenticator>
      <h4 style={{ fontWeight: "bold" }}>
        {action === "add" && "Create site"}
        {action === "update" && "Update site"}
      </h4>
      <Form>
        <Form.Group as={Row} style={{ marginTop: 50 }}>
          <Col>
            <Form.Label>Name</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) => setSite({ ...site, name: e.target.value })}
              value={site.name ? site.name : ""}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Headline</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) => setSite({ ...site, headline: e.target.value })}
              value={site.headline ? site.headline : ""}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Button
          onClick={action === "add" ? handleCreateSite : handleUpdateSite}
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
    </Authenticator>
  );
};

export default FormSite;
