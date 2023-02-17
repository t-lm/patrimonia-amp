// pages/index.js

import React, { useState } from "react";

import Head from "next/head";

import { API } from "aws-amplify";
import { listSites } from "../src/graphql/queries";

import Layout from "../comps/layout";
import { Welcome } from "../comps/welcome";
import { Allsites } from "../comps/allsites";

export const getStaticProps = async () => {
  try {
    const response = await API.graphql({
      query: listSites,
      authMode: "AWS_IAM",
    });
  //  return { props: { Sites: response.data.listSites.items }, revalidate: 10 };
  return { props: { Sites: response.data.listSites.items } };
  } catch (err) {
    console.error(err);
  //  return { props: {}, revalidate: 10 };
  return { props: {} };
  }
};

const Sites = ({ Sites = [] }) => {

  return (
    <Layout>
      <Head>
        <title>Patrimonia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Welcome />
      <Allsites Sites={Sites} />

    </Layout>
  );
};

export default Sites;
