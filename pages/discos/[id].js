// ./pages/discos/[id].js

import React, { useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'

import { API } from "aws-amplify";
import { getDisco, listDiscos } from "../../src/graphql/queries";
import { deleteDisco } from "../../src/graphql/mutations";

import Layout from "../../comps/layout";
import { DiscoAddress } from "../../comps/discoaddress";
import { DiscoBasics } from "../../comps/discobasics";
import { DiscoBooking } from "../../comps/discobooking";
import { DiscoDescription } from "../../comps/discodescription";
import { DiscoFacts } from "../../comps/discofacts";
import { DiscoOrganiser } from "../../comps/discoorganiser";
import { DiscoPictures } from "../../comps/discopictures";
import { Separator } from "../../comps/separator";

import { Keys } from "../../utils/dictionary";
import { getCurrentUser, lang } from "../../utils/auth";

export const getStaticProps = async ({ params }) => {
  try {
    const { data } = await API.graphql({
      query: getDisco,
      variables: { id: params.id },
      authMode: "AWS_IAM",
    });
    return { props: { disco: data.getDisco }, revalidate: 10 };
  } catch (err) {
    console.error(err);
    return { props: {}, revalidate: 10 };
  }
};

export const getStaticPaths = async () => {
  try {
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
  } catch (err) {
    console.error(err);
    return { paths: [], fallback: false };
  }
};

const Disco = ({ disco }) => {
  const lang = useRouter().locale
  const [username, setUsername] = useState(false);
  useEffect(() => setUsername(getCurrentUser().username), []);

  const handleDeleteDisco = async () => {
    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: deleteDisco,
        variables: { input: { id: disco.id } },
      });
      window.location.href = `/`;
    } catch (e) {
      console.error(e);
      setError(Keys[lang]["errorDiscoDelete"]);
    }
  };

  return (
    <Layout>
      <Head>
        <title>{disco.name}</title>
      </Head>

      <DiscoBasics disco={disco} lang={lang} />
      <Separator backgroundColor="pink" />
      <DiscoPictures disco={disco} lang={lang} />
      <DiscoFacts disco={disco} lang={lang} />
      {disco.description && <DiscoDescription disco={disco} lang={lang} />}
      <DiscoBooking disco={disco} lang={lang} />
      <DiscoAddress disco={disco} lang={lang} />
      <DiscoOrganiser organiser={disco.organiser} lang={lang} />

      {["tlm", disco.organiserID].includes(username) && (
        <div style={{ marginTop: 50 }}
        >
          <div
            style={{
              marginTop: 30,
              backgroundColor: "white",
              border: "1px solid pink",
              color: "black",
              fontWeight: "bold",
              padding: "5px 30px",
              borderRadius: 5,
              width: 200,
              textAlign: "center"
            }}
          >
            <Link
              style={{ color: "black" }}
              href={{
                pathname: "/admin/update",
                query: { model: "disco", id: disco.id },
              }}
            >
              {Keys[lang]["update"]}
            </Link>
          </div>
          <div
            style={{
              marginTop: 20,
              borderTop: "1px solid #eee",
              paddingTop: 20,
            }}
          >
            <button
              onClick={() => handleDeleteDisco()}
              size="md"
              style={{
                backgroundColor: "white",
                border: "1px dotted pink",
                color: "grey",
                padding: "5px 30px",
                borderRadius: 5,
                width: 200,
                fontStyle: 'italic'
              }}
            >
              {Keys[lang]["remove"]}
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Disco;
