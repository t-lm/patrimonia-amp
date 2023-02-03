// ./pages/discos/[id].js

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { API } from "aws-amplify";
import { getDisco, listDiscos } from "../../src/graphql/queries";

import Layout from "../../comps/layout";
import { DiscoAddress } from "../../comps/discoaddress";
import { DiscoBasics } from "../../comps/discobasics";
import { DiscoBooking } from "../../comps/discobooking";
import { DiscoFacts } from "../../comps/discofacts";
import { DiscoOrganiser } from "../../comps/discoorganiser";
import { DiscoPictures } from "../../comps/discopictures";
import { Separator } from "../../comps/separator";

import { getCurrentUser } from "../../utils/auth";

export const getStaticProps = async ({ params }) => {
  const { data } = await API.graphql({
    query: getDisco,
    variables: { id: params.id },
    authMode: "AWS_IAM",
  });
  return { props: { disco: data.getDisco } };
}

export const getStaticPaths = async () => {
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

  const [username, setUsername] = useState(false);
  useEffect(() => setUsername(getCurrentUser().username), []);

  return (
    <Layout>
      <Head>
        <title>{disco.name}</title>
      </Head>

      <DiscoBasics disco={disco}/>
      <Separator backgroundColor="pink" />
      <DiscoPictures disco={disco} />
      <DiscoFacts disco={disco} />
      <DiscoBooking disco={disco} />
      <DiscoAddress disco={disco} />
      <DiscoOrganiser organiser={disco.organiser} />

      {username === "tlm" && (
        <div style={{ marginTop: 30 }}>
          <Link
            href={{
              pathname: "/admin/update",
              query: { model: "disco", id: disco.id },
            }}
          >
            Mettre à jour
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Disco;
