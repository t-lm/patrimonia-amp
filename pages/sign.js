// ./pages/sign.js

import React, { useState } from "react";

import Auth from "@aws-amplify/auth";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../comps/layout";

import { setUserLocal } from "../utils/auth";


const Sign = (props) => {
  // props
  const user = props.user;

  // state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // functions

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Auth.signIn(username, password);
      setUserLocal({ username })
      window.location.href = "/";
      console.log("you are connected: ", username);
    } catch (e) {
      console.log("error signing up:", e);
    }
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit} style={{marginTop: 50}}>
        <Form.Group as={Row} style={{ marginTop: 30 }}>
          <Col sm="9">
            <Form.Control
              type="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Nom d'utilisateur"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 30 }}>
          <Col sm="9">
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Mot de passe"
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
          disabled={!password}
        >
          Se connecter
        </Button>
      </Form>
    </Layout>
  );
};

export default Sign;
