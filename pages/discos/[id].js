// ./pages/discos/[id].js

import Head from "next/head";

import React from "react";
import Layout from "../../comps/layout";

import { API } from "aws-amplify";
import { getDisco, listDiscos } from "../../src/graphql/queries";

import { DiscoAddress } from "../../comps/discoaddress";
import { DiscoBasics } from "../../comps/discobasics";
import { DiscoBooking } from "../../comps/discobooking";
import { DiscoFacts } from "../../comps/discofacts";
import { DiscoGuide } from "../../comps/discoguide";
import { DiscoPictures } from "../../comps/discopictures";

export async function getStaticProps({ params }) {
  console.log(params)
  const { data } = await API.graphql({
    query: getDisco,
    variables: { id: params.id },
    authMode: "AWS_IAM",
  });
  return { props: { disco: data.getDisco } };
}

export async function getStaticPaths() {
  const response = await API.graphql({
    query: listDiscos,
    authMode: "AWS_IAM",
  });
  const paths = response.data.listDiscos.items.map((s) => {
    return {
      params: {
        id: s.id,
      },
    };
  });

  return { paths, fallback: false };
}

//export default function Disco({ disco }) {
const Disco = ({ disco }) => {

  return (
    <Layout>
    <Head>
      <title>{disco.name}</title>
    </Head>
    {/*
      <article> 
        <DiscoBasics disco={disco} guide={disco.guide} />
        <section
          style={{
            backgroundColor: "pink",
            height: 10,
            xpadding: "10px 10px",
            marginTop: 10,
          }}
        />
        <DiscoPictures disco={disco} />
        <DiscoFacts disco={disco} guide={disco.guide} />
        <DiscoBooking disco={disco} guide={disco.guide} />
        <DiscoAddress disco={disco} />
        <DiscoGuide guide={disco.guide} />
      </article>
      */}
  </Layout>
  );
};

export default Disco;
