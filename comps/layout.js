8// ./comps/layout.js

import React, { useEffect, useState } from "react";

import { useRouter } from 'next/router'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BsHouse, BsBoxArrowInRight, BsBoxArrowRight } from "react-icons/bs";

import { Keys } from "../utils/dictionary";
import { getCurrentUser, logout } from "../utils/auth";

export const siteTitle = "Patrimonia";

const Layout = ({ children }) => {
  
  const lang = useRouter().locale
  const [username, setUsername] = useState();
  useEffect(() => setUsername(getCurrentUser().username), []);

  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Découvrir le patrimoine"
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
            <Container>
            <Navbar.Brand href="/">
              <Image
                alt="Patrimonia"
                src="/logo_pink.png"
                width={30}
                height={30}
                className="d-inline-block align-top"
              />
              <span
                style={{
                  marginLeft: 20,
                  fontWeight: 700,
                  fontSize: "1.7rem",
                  color: "black",
                }}
              >
                PATRIMONIA
              </span>
            </Navbar.Brand>
            </Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse className="justify-content-end">
            <Link
                style={{ marginRight: 25, color: "black" }}
                href="/"
              >
                {Keys[lang]["DISCOVERIES"]}
              </Link>
              <Link
                style={{ marginRight: 25, color: "black" }}
                href="/sites"
              >
                {Keys[lang]["SITES"]}
              </Link>
             {/* <Nav.Link
                style={{ marginRight: 25, color: "black" }}
                href="/organisers"
              >
                GUIDES
              </Nav.Link> */}
              <NavDropdown
                align="end"
                style={{color: "black"}}
                title={
                  <span
                    style={{
                      marginRight: 10,
                      color: "black"
                    }}
                  >
                    {username && username.toUpperCase()}
                  </span>
                }
              >
                <small>
                  {username ? (
                    <>
                      <NavDropdown.Item href={`/admin`}>
                        <BsHouse style={{ marginRight: 5 }} />
                        {Keys[lang]["MYACCOUNT"]}
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/" onClick={(e) => logout()}>
                        <BsBoxArrowRight style={{ marginRight: 5 }} />
                        {Keys[lang]["SIGNOUT"]}
                      </NavDropdown.Item>
                    </>
                  ) : (
                    <NavDropdown.Item href={`/sign`}>
                      <BsBoxArrowInRight style={{ marginRight: 5 }} />
                      {Keys[lang]["SIGNIN"]}
                    </NavDropdown.Item>
                  )}
                </small>
              </NavDropdown>
            </Navbar.Collapse>
          </Navbar>

          <main style={{ marginTop: 30, marginBottom: 10, minHeight: "90vh" }}>{children}</main>

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
                {Keys[lang]["getInTouch"]}
              </a>
            </div>
          </footer>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
