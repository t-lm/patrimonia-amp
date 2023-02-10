// ./pages/organisers/[id].js

import React, { useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";

import { API } from "aws-amplify";
import { getOrganiser, listOrganisers } from "../../src/graphql/queries";

import Layout from "../../comps/layout";
import { Separator } from "../../comps/separator";
import { OrganiserBasics } from "../../comps/organiserbasics";
import { OrganiserContact } from "../../comps/organisercontact";
import { OrganiserDiscos } from "../../comps/organiserdiscos";
import { getCurrentUser } from "../../utils/auth";

const LANG = "fr";

export const getStaticProps = async ({ params }) => {
  const { data } = await API.graphql({
    query: getOrganiser,
    variables: { id: params.id },
    authMode: "AWS_IAM",
  });
  return { props: { organiser: data.getOrganiser } };
};

export const getStaticPaths = async () => {
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
};

const Organiser = ({ organiser }) => {

  const [username, setUsername] = useState(false);
  useEffect(() => setUsername(getCurrentUser().username), []);

  return (
    <Layout>
      <Head>
        <title>{organiser.name}</title>
      </Head>

      <OrganiserBasics organiser={organiser} />
      <Separator backgroundColor="#fb4333" />

      {/*<OrganiserDiscos discos={discos} />*/}
      <OrganiserContact organiser={organiser} />

      {username === "tlm" && (
        <div style={{ marginTop: 30 }}>
          <Link
            style={{ color: "black"}}
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
