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
import { DiscoOrganiser } from "../../comps/discoorganiser";
import { DiscoPictures } from "../../comps/discopictures";
import { Separator } from "../../comps/separator";

export async function getStaticProps({ params }) {
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

const Disco = ({ disco }) => {

  console.log(disco)

  return (
    <Layout>
    <Head>
      <title>{disco.name}</title>
    </Head>

    <DiscoBasics disco={disco} organiser={disco.organiser} />
    <Separator color="pink" />
    <DiscoPictures disco={disco} />
    <DiscoFacts disco={disco} organiser={disco.organiser} />
    <DiscoBooking disco={disco} organiser={disco.organiser} />
    <DiscoAddress disco={disco} />
    <DiscoOrganiser organiser={disco.organiser} />

  </Layout>
  );
};

export default Disco;
