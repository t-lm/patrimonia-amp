// pages/index.js
//
// store filter in a state

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { API } from "aws-amplify";
import { listDiscos } from "../src/graphql/queries";

import { getCurrentUser } from "../utils/auth";
import Layout from "../comps/layout";
import { Alldiscos } from "../comps/alldiscos";
import { Welcome } from "../comps/welcome";

const today = new Date().toISOString().slice(0, 10);

export const getStaticProps = async () => {
  try {
    const response = await API.graphql({ query: listDiscos, variables: {filter: { dateEnd: { gt: today}}}, authMode: "AWS_IAM" });
    return { props: { Discos: response.data.listDiscos.items }, revalidate: 10 };
  } catch (err) {
    console.log(err);
    return { props: {}, revalidate: 10 };
  }
};

const Index = ({ Discos = [] }) => {

  const [username, setUsername] = useState();
  useEffect(() => setUsername(getCurrentUser().username), []);

  return (
    <Layout>
      <Head>
        <title>Patrimonia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Welcome />
      <Alldiscos Discos={Discos} />

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

export default Index;
