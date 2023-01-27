// pages/admin/site.js
import React, { useState } from "react";

import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify, API } from "aws-amplify";
import Head from "next/head";
import awsExports from "../../src/aws-exports";
import { createSite } from "../../src/graphql/mutations";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Layout from "../../comps/layout";

const slugify = require("slugify");

Amplify.configure({ ...awsExports, ssr: true });

export default function Site() {

  const [site, setSite] = useState({});

  const handleCreateSite = async(event) => {
    event.preventDefault();
  
    try {
      const { data } = await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: createSite,
        variables: {
          input: {
            id: slugify(site["name"]),
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
  }
  
  return (
    <Layout>
      <Head>
        <title>Create site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 style={{ margin: "50px 10px" }}>Create site</h1>

        <div>
          <Authenticator>
            <Form>
              <Form.Group as={Row} controlId="Name">
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

              <Form.Group as={Row}>
                <Col>
                  <Form.Label>Headline</Form.Label>
                </Col>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    onChange={(e) =>
                      setSite({ ...site, headline: e.target.value })
                    }
                    value={site.headline ? site.headline : ""}
                    size="sm"
                  />
                </Col>
              </Form.Group>

              <Button onClick={handleCreateSite} style={{ marginTop: 30 }}>
                Save
              </Button>
            </Form>
          </Authenticator>
        </div>
      </main>
    </Layout>
  );
}
