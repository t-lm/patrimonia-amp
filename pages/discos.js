// pages/discos.js

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { API } from "aws-amplify";
import { listDiscos } from "../src/graphql/queries";

import { getCurrentUser } from "../utils/auth";
import Layout from "../comps/layout";
import { AllDiscos } from "../comps/alldiscos";
import { DiscoPill } from "../comps/discopill";

export const getStaticProps = async ({ req }) => {
  try {
    const response = await API.graphql({
      query: listDiscos,
      authMode: "AWS_IAM",
    });
    return { props: { Discos: response.data.listDiscos.items } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

const Discos = ({ Discos = [] }) => {

  // state
  const [username, setUsername] = useState();
  useEffect(() => setUsername(getCurrentUser().username), []);

  return (
    <Layout>
      <Head>
        <title>Découvertes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AllDiscos allDiscos={Discos} />

      {username && username === "tlm" && (
        <div style={{ marginTop: 50 }}>
          <Link
            style={{ color: "black" }}
            href={{ pathname: "/admin/new", query: { model: "disco" } }}
          >
            Ajouter
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Discos;
