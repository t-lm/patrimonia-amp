// ./pages/organisers/[id].js

import React, { useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { API } from "aws-amplify";
import { getOrganiser, listOrganisers } from "../../src/graphql/queries";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../comps/layout";

import utilStyles from "../../styles/utils.module.css";
import { Keys } from "../../utils/dictionary";
import { getCurrentUser } from "../../utils/auth";

const LANG = "fr";
//const DiscoTypes = require("../../utils/DiscoTypes.json");
//const DiscoSubjects = require("../../utils/DiscoSubjects.json");
const OrganiserTypes = require("../../utils/OrganiserTypes.json");

export async function getStaticProps({ params }) {
  const { data } = await API.graphql({
    query: getOrganiser,
    variables: { id: params.id },
    authMode: "AWS_IAM",
  });
  return { props: { organiser: data.getOrganiser } };
}

export async function getStaticPaths() {
  const response = await API.graphql({
    query: listOrganisers,
    authMode: "AWS_IAM",
  });
  const paths = response.data.listOrganisers.items.map((s) => {
    return {
      params: {
        id: s.id,
      },
    };
  });
  return { paths, fallback: false };
}

const Organiser = ({ organiser }) => {
  const [username, setUsername] = useState(false);
  useEffect(() => setUsername(getCurrentUser().username), []);

  return (
    <Layout>
      <Head>
        <title>{organiser.name}</title>
      </Head>

      <article>
        <section
          id="basics"
          style={{
            backgroundColor: "white",
            padding: "10px 10px",
            marginTop: 30,
          }}
        >
          <Row>
            <Col>
              <Image
                src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/organisers/${organiser.id}`}
                className="rounded pe-1"
                alt={organiser.name}
                title={organiser.name}
                width={50}
                height={50}
                roundedCircle
                style={{
                  objectFit: "cover",
                  border: "2px solid #111",
                  padding: 2,
                }}
              />
              <span
                style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: 15 }}
              >
                {organiser.name}
              </span>
            </Col>
          </Row>

          <div
            style={{
              fontWeight: "bold",
              marginTop: 10,
              fontSize: "1.1rem",
            }}
          >
            {organiser.address && <span>{organiser.address.city}</span>}
            {organiser.type && (
              <span
                style={{
                  marginLeft: 5,
                  fontSize: "1.1rem",
                }}
              >
                .{" "}
                {organiser.type in OrganiserTypes &&
                  OrganiserTypes[organiser.type][LANG]}
              </span>
            )}
          </div>

          <Row
            style={{
              display: "flexbox",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            {organiser.description_fr && <Col>{organiser.description_fr}</Col>}
          </Row>
        </section>

        {/* separator */}
        <section
          style={{
            backgroundColor: "#fb4333",
            height: 10,
            padding: "10px 10px",
            marginTop: 30,
          }}
        />

        {/*
        <section
          id="visits"
          style={{
            backgroundColor: "white",
            padding: 10,
            marginTop: 30,
          }}
        >
          <h4>{Keys[LANG].visits}</h4>
        </section>
        
        <section style={{padding: 10}}>
          
          { visits.map((v) => (
          <Row
            key={v.id}
            style={{
              marginTop: 20,
              padding: 10,
              backgroundColor: "white",
            }}
          >
        
        
            <Col xs={4} md={2} style={{ padding: 0 }}>
              <div
                style={{
                  width: 120,
                  height: 120,
                  position: "relative",
                  display: "block",
                }}
              >
                {v.pictures &&
                  Array.isArray(v.pictures) &&
                  v.pictures.length > 0 && (
                    <Image
                      src={`/sites/${v.pictures[0]}`}
                      className="shadow-1-strong rounded"
                      alt={v.name}
                      fill
                      priority
                      style={{ objectFit: "cover" }}
                    />
                  )}
              </div>
            </Col>

            <Col style={{ marginLeft: 20 }}>

              <Row>
                <Col xs={12} md={8}>
                  <span
                    style={{
                      fontWeight: "bold",
                      marginTop: 10,
                      fontSize: "1.1rem",
                    }}
                  >
                    <Link
                      href={`/visits/${v.id}`}
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {v.name}
                    </Link>
                  </span>
                  </Col>
                <Col xs={12} md={4}>
                  {v.subjects && (
                    <div style={{ float: "right" }}>
                      {v.subjects.map((sub, i) => (
                        <span
                          key={sub}
                          style={{
                            backgroundColor: DiscoSubjects[sub]["color"],
                            color: "white",
                            fontSize: "0.8rem",
                            padding: 4,
                            borderRadius: 4,
                            marginLeft: i > 0 && 7,
                          }}
                        >
                          {sub in DiscoSubjects && (
                            <span>{DiscoSubjects[sub][LANG]}</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </Col>
              </Row>

              <p
                style={{
                  margin: "10px 0px 5px",
                  paddingTop: 0,
                  fontSize: "0.9rem",
                }}
              >
                <a>{v.headline}</a>
              </p>

              <p
                style={{
                  marginBottom: 5,
                  paddingTop: 0,
                  fontWeight: "bold",
                  marginTop: 10,
                  fontSize: "0.9rem",
                }}
              >
                {v.type && (
                  <span>
                    {v.type in DiscoTypes
                      ? DiscoTypes[v.type][LANG]
                      : v.type}
                  </span>
                )}
              </p>

              <p
                style={{
                  marginBottom: 5,
                  paddingTop: 0,
                  marginTop: 10,
                }}
              >
                {v.sites &&
                  Array.isArray(v.sites) &&
                  v.sites.map((site, i) => (
                    <span
                      key={site}
                      style={{
                        backgroundColor: "#eee",
                        fontSize: "0.8rem",
                        padding: 4,
                        borderRadius: 4,
                        marginLeft: i > 0 && 7,
                      }}
                    >
                      {allSites.find((x) => x.id === site) && (
                        <span>{allSites.find((x) => x.id === site).name}</span>
                      )}
                    </span>
                  ))}
              </p>
            </Col>
          </Row>
                      ))} 
        </section>
        */}

        <section
          id="contact"
          style={{
            backgroundColor: "white",
            padding: "10px 10px",
            marginTop: 30,
          }}
        >
          <h4 style={{ marginBottom: 20 }}>{Keys[LANG].contact}</h4>
          {organiser.address && (
            <Row
              style={{
                marginTop: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Col xs={4} md={3}>
                {Keys[LANG]["address"]}
              </Col>
              <Col xs={8} md={9}>
                <a
                  style={{ color: "grey", textDecoration: "underline" }}
                  href={`https://www.google.com/maps/place/${encodeURIComponent(
                    `${organiser.address.street},${organiser.address.postalCode} ${organiser.address.city},${organiser.address.country}`
                  )}`}
                >
                  {organiser.address.street && (
                    <span>{organiser.address.street},</span>
                  )}{" "}
                  {organiser.address.postalCode} {organiser.address.city}
                </a>
              </Col>
            </Row>
          )}
          {organiser.www && (
            <Row
              style={{
                marginTop: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Col xs={4} md={3}>
                {Keys[LANG]["www"]}
              </Col>
              <Col xs={8} md={9} style={{ color: "grey" }}>
                {organiser.www}
              </Col>
            </Row>
          )}
          {organiser.phone && (
            <Row
              style={{
                marginTop: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Col xs={4} md={3}>
                {Keys[LANG]["phone"]}
              </Col>
              <Col xs={8} md={9} style={{ color: "grey" }}>
                {organiser.phone}
              </Col>
            </Row>
          )}
          {organiser.email && (
            <Row
              style={{
                marginTop: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Col xs={4} md={3}>
                {Keys[LANG]["email"]}
              </Col>
              <Col xs={8} md={9} style={{ color: "grey" }}>
                {organiser.email}
              </Col>
            </Row>
          )}
        </section>
      </article>

      {username === "tlm" && (
        <div style={{ marginTop: 30 }}>
          <Link
            href={{
              pathname: "/admin/update",
              query: { model: "organiser", id: organiser.id },
            }}
          >
            Mettre à jour
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Organiser;
