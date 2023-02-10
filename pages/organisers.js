// pages/organisers.js

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { API } from "aws-amplify";
import { listOrganisers } from "../src/graphql/queries";

import { getCurrentUser } from "../utils/auth";
import Layout from "../comps/layout";

//import { OrganiserPill } from "../comps/organiserpill";

export const getStaticProps = async ({ req }) => {
  try {
    const response = await API.graphql({
      query: listOrganisers,
      authMode: "AWS_IAM",
    });
    return { props: { Organisers: response.data.listOrganisers.items }, revalidate: 10  };
  } catch (err) {
    console.log(err);
    return { props: {}, revalidate: 10  };
  }
};

const Organisers = ({ Organisers = [] }) => {
  // state
  const [username, setUsername] = useState();
  useEffect(() => setUsername(getCurrentUser().username), []);

  //console.log(Organisers);

  return (
    <Layout>
      <Head>
        <title>Organisateurs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main */}

      {Organisers.map((organiser) => (
        <Row key={organiser.id} style={{ marginTop: 10 }}>
          <Col md={2}>
            <Image
              src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/organisers/${organiser.id}`}
              alt={organiser.name}
              width="40"
              height="40"
              style={{
                height: 40,
                margin: "10px 20px 10px 0px",
                paddingBottom: 10,
              }}
            />
          </Col>
          <Col>
            <Link style={{ color: "black" }} href={`/organisers/${organiser.id}`}>{organiser.name}</Link>
          </Col>
        </Row>
      ))}

      {username && username === "tlm" && (
        <div style={{ marginTop: 50 }}>
          <Link
            style={{ color: "black" }}
            href={{ pathname: "/admin/new", query: { model: "organiser" } }}
          >
            Ajouter
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Organisers;
