// ./comps/layout.js

import React, { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BsHouse, BsBoxArrowInRight, BsBoxArrowRight } from "react-icons/bs";

import { Keys } from "../utils/dictionary";
import { getCurrentUser, logout } from "../utils/auth";

const LANG = "fr";
export const siteTitle = "Patrimonia";

const Layout = ({ children }) => {
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(getCurrentUser().username);
  }, []);

  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Discover heritage sites with the people who knows them best"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <Row className="justify-content-md-center">
        <Col lg={8}>
          <Navbar
            expand="md"
            style={{
              borderBottom: "1px solid #dddddd",
              padding: "10px 0px",
              marginTop: 5,
            }}
          >
            <Navbar.Brand
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: 30,
              }}
              href="/"
            >
              <Image
                alt="Patrimonia"
                src="/logo_pink.png"
                width={30}
                height={30}
                className="d-inline-block align-top"
              />
              <span
                style={{
                  paddingLeft: 20,
                  fontWeight: 700,
                  fontSize: "1.7rem",
                  color: "black",
                }}
              >
                patrimonia
              </span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse className="justify-content-end">
              {/*
                <Nav.Link
                  style={{ margin: "0px 20px", color: "black" }}
                  href="/sites"
                >
                  {Keys[LANG]["sites"]}
                </Nav.Link>
              */}
                <NavDropdown
                  align="end"
                  title={
                    <span
                      style={{
                        marginRight: 10,
                      }}
                    >
                      {username && username}
                    </span>
                  }
                >
                  <small>
                    {username ? (
                      <>
                        <NavDropdown.Item href={`/admin`}>
                          <BsHouse style={{ marginRight: 5 }} />
                          Admin
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/" onClick={(e) => logout()}>
                          <BsBoxArrowRight style={{ marginRight: 5 }} />
                          Se déconnecter
                        </NavDropdown.Item>
                      </>
                    ) : (
                      <NavDropdown.Item href={`/sign`}>
                        <BsBoxArrowInRight style={{ marginRight: 5 }} />
                        Se connecter
                      </NavDropdown.Item>
                    )}
                  </small>
                </NavDropdown>
            </Navbar.Collapse>
          </Navbar>

          <main style={{ marginTop: 30 }}>{children}</main>

          <footer>
            <div
              style={{
                fontSize: "0.8rem",
                color: "grey",
                borderTop: "1px solid #eee",
                paddingTop: 10,
                marginTop: 50,
                textAlign: "center",
              }}
            >
              © Patrimonia 2023 -{" "}
              <a style={{ color: "grey" }} href="mailto:hi@patrimonia.app">
                {Keys[LANG]["getInTouch"]}
              </a>
            </div>
          </footer>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
