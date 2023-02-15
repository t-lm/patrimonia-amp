// pages/index.js

import React from "react";

import Head from 'next/head'

import { API } from "aws-amplify";
import { listDiscos } from "../src/graphql/queries";

import Layout from "../comps/layout";
import { Alldiscos } from "../comps/alldiscos";
import { Welcome } from "../comps/welcome";

const today = new Date().toISOString().slice(0, 10);

export const getStaticProps = async () => {
  try {
    const response = await API.graphql({ query: listDiscos, variables: {filter: { dateEnd: { ge: today}}}, authMode: "AWS_IAM" });
    // return { props: { Discos: response.data.listDiscos.items }, revalidate: 10 };
    return { props: { Discos: response.data.listDiscos.items } };
  } catch (err) {
    console.error(err);
   // return { props: {}, revalidate: 10 };
    return { props: {} };
  }
};

const Index = ({ Discos = [] }) => {

  return (
    <Layout>
      <Head>
        <title>Patrimonia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Welcome />
      <Alldiscos Discos={Discos} />
    </Layout>
  );
};

export default Index;
