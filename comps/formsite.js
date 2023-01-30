// comps/formsite.js

import React, { useState } from "react";

import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify, API } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { createSite, updateSite } from "../src/graphql/mutations";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Error } from "./error";

const SiteTypes = require("../utils/SiteTypes.json");
const slugify = require("slugify");

const LANG = "fr";

Amplify.configure({ ...awsExports, ssr: true });

const FormSite = (props) => {

  const action = props.action;
  const [site, setSite] = useState(props.input);
  const [error, setError] = useState(false);

  const handleUpdateSiteType = (key) => {
    let index = site.types.indexOf(key)
    let types = site.types
    // remove from list
    if (index > -1) { types.splice(index, 1); setSite({...site, types }) }
    // add to existing list
    else if (site.types.length > 0 ) { types.push(key); setSite({...site, types }) }
    // add to empty list
    else setSite({...site, types: [key]})
}

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

      window.location.href = `/sites/${site.id}`;
    } catch ({ errors }) {
      console.error(...errors);
      setError("There is an error with this form")
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

      window.location.href = `/sites/${site.id}`;
    } catch ({ errors }) {
      console.error(...errors);
      //throw new Error(errors[0].message);
      setError("There is an error with this form")
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
              value={site.name}
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
              as="textarea"
              rows={2}
              onChange={(e) => setSite({ ...site, headline: e.target.value })}
              value={site.headline}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Site type</Form.Label>
          </Col>
          <Col sm="9">
            {Object.keys(SiteTypes).map((x) => (
              <Form.Check
                key={x}
                onChange={() => handleUpdateSiteType(x)}
                label={SiteTypes[x][LANG]}
                checked={site.types.includes(x)}
              />
            ))}
          </Col>
        </Form.Group>

        <Row style={{margin: "30px 0px", borderTop: "1px solid #ddd"}} />
        <p>Address</p>
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Street</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
                type="text"
                onChange={(e) => setSite({ ...site, address: {...site.address, street: e.target.value }})}
                value={site.address.street}
                size="sm"
              />
            </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Post code</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
                type="text"
                onChange={(e) => setSite({ ...site, address: {...site.address, postalCode: e.target.value }})}
                value={site.address.postalCode}
                size="sm"
              />
            </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>City</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
                type="text"
                onChange={(e) => setSite({ ...site, address: {...site.address, city: e.target.value }})}
                value={site.address.city}
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
      {error && <Error error={error} />}
    </Authenticator>
  );
};

export default FormSite;
