// ./pages/signup.js

import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from 'next/head'

import { API } from "aws-amplify";
import { createUser } from "../src/graphql/mutations";

import Auth from "@aws-amplify/auth";
import { nanoid } from "nanoid";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../comps/layout";
const Keys = require("../utils/Keys.json");

const Signup = () => {

  const lang = useRouter().locale;

  // state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // functions

  const handleSubmit = async (e) => {
    e.preventDefault();

    Auth.signUp({ username, password, attributes: { email }, autoSignIn: {enabled: true} })
    .then(() => {
          console.log({ id: nanoid(8), username, email, role: '' })
          // create User
            API.graphql({ 
              authMode: "AMAZON_COGNITO_USER_POOLS", 
              query: createUser, 
              variables: { input: { id: nanoid(8), username, email, role: '' } }
            })
            .then(() => {   window.location.href = "/admin" })
            .catch(e => console.log(e))
        
    })
    .catch(e => console.log(e))
  };

  return (
    <Layout>
      <Head>
        <title>{Keys["SIGNUP"][lang]}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3 style={{marginTop: 50, fontWeight: "bold"}}>{Keys["SIGNUP"][lang]}</h3>
      <Form onSubmit={handleSubmit} style={{marginTop: 50}}>
        <Form.Group as={Row} style={{ marginTop: 30 }}>
          <Col sm="9">
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder={Keys["yourEmail"][lang]}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 30 }}>
          <Col sm="9">
            <Form.Control
              type="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder={Keys["yourUsername"][lang]}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 30 }}>
          <Col sm="9">
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder={Keys["yourPassword"][lang]}
            />
          </Col>
        </Form.Group>

        <Button
          type="submit"
          onClick={handleSubmit}
          style={{
            backgroundColor: "pink",
            color: "black",
            border: "0px solid #dedede",
            minWidth: 200,
            marginTop: 50
          }}
          disabled={!password || !username || !email}
        >
          {Keys["Signup"][lang]}
        </Button>
      </Form>
    </Layout>
  );
};

export default Signup;
