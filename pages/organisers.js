// pages/organisers.js

import React, { useEffect, useState } from "react";
import Head from 'next/head';
import Link from 'next/link';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { API } from 'aws-amplify';
import { listOrganisers } from '../src/graphql/queries';

import { getCurrentUser } from "../utils/auth";
import Layout from "../comps/layout";

//import { OrganiserPill } from "../comps/organiserpill";

export const getStaticProps = async ({ req }) => {

  try {
    const response = await API.graphql({ query: listOrganisers, authMode: 'AWS_IAM' });
    return { props: { Organisers: response.data.listOrganisers.items }};
  } catch (err) {
    console.log(err);
    return { props: {}};
  }
}

const Organisers = ({ Organisers = [] }) => {

  // state
  const [username, setUsername] = useState();
  useEffect(() => setUsername(getCurrentUser().username), []);

  console.log(Organisers)

  return (
    <Layout>
      <Head>
        <title>Organisateurs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main */}
      <Row id="main" style={{ marginTop: 10 }}>
        <Col id="list">
          {Organisers.map(organiser => <div key={organiser.id}>
            <img
                src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/organisers/${organiser.id}`}
                style={{
                  height: 40,
                  margin: "20px 20px 20px 0px",
                  paddingBottom: 10,
                }}
              />
              <Link href={`/organisers/${organiser.id}`}>{organiser.name}</Link>
              </div> )}
        </Col>
      </Row>
          
        { username && username === "tlm" && 
          <div style={{marginTop: 50}}>
            <Link style={{color: "black"}} href={{pathname: "/admin/new", query:{model: "organiser"}}}>Ajouter un organisateur</Link>
          </div>
          }
    </Layout>
  );
}

export default Organisers
