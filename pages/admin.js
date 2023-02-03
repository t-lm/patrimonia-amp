// pages/admin.js

import React, { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../comps/layout";
import { getCurrentUser } from "../utils/auth";

export default function Index() {
  const [username, setUsername] = useState();

  useEffect(() => setUsername(getCurrentUser().username), []);

  return (
    <Layout>
      <Head>
        <title>Patrimonia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {username && username === "tlm" && (
        <>
          <Row style={{marginTop: 30}}>
            <Col>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                href={{ pathname: "/" }}
              >
               Voir les sites
              </Link>
              {" - "}
              <Link
                style={{ color: "black", textDecoration: "none" }}
                href={{ pathname: "/admin/new", query: { model: "site" } }}
              >
                Ajouter un site
              </Link>
            </Col>
          </Row>

          <Row style={{marginTop: 10}}>
            <Col>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                href={{ pathname: "/admin/media" }}
              >
                Voir les photos
              </Link>
              {" - "}
              <Link
                style={{ color: "black", textDecoration: "none" }}
                href={{ pathname: "/admin/new", query: { model: "media" } }}
              >
                Ajouter une photo
              </Link>
            </Col>
          </Row>

          <Row style={{marginTop: 10}}>
            <Col>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                href={{ pathname: "/discos" }}
              >
                Voir les découvertes
              </Link>
              {" - "}
              <Link
                style={{ color: "black", textDecoration: "none" }}
                href={{ pathname: "/admin/new", query: { model: "disco" } }}
              >
                Ajouter une découverte
              </Link>
            </Col>
          </Row>

          <Row style={{marginTop: 10}}>
            <Col>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                href={{ pathname: "/organisers" }}
              >
                Voir les organisateurs
              </Link>
              {" - "}
              <Link
                style={{ color: "black", textDecoration: "none" }}
                href={{ pathname: "/admin/new", query: { model: "promoter" } }}
              >
                Ajouter un organisateur
              </Link>
            </Col>
          </Row>
        
        </>
      )}
    </Layout>
  );
}
