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

import { getCurrentUser } from "../../utils/auth";

const Keys = require("../../utils/Keys.json");
const { Languages } = require("../../utils/auth");

export const getStaticProps = async ({ params, locale }) => {
  try {
    const { data } = await API.graphql({
      query: getDisco,
      variables: { id: params.id },
      authMode: "AWS_IAM",
    });
    return { props: { disco: data.getDisco, lang: locale }, revalidate: 10 };
  } catch (err) {
    console.error(err);
    return { props: { lang: locale }, revalidate: 10 };
  }
};

export const getStaticPaths = async () => {
  try {
    const response = await API.graphql({
      query: listDiscos,
      authMode: "AWS_IAM",
    });
    const pathsFR = response.data.listDiscos.items.map((s) => { return ({ params: { id: s.id, }, locale: "fr" })})
    const pathsEN = response.data.listDiscos.items.map((s) => { return ({ params: { id: s.id }, locale: "en" }) })
    const pathsES = response.data.listDiscos.items.map((s) => { return ({ params: { id: s.id }, locale: "es" }) })
    const pathsDE = response.data.listDiscos.items.map((s) => { return ({ params: { id: s.id }, locale: "de" }) })
    const pathsNL = response.data.listDiscos.items.map((s) => { return ({ params: { id: s.id }, locale: "nl" }) })
    return { paths: pathsFR.concat(pathsEN).concat(pathsES).concat(pathsDE).concat(pathsNL), fallback: false };

  } catch (err) {
    console.error(err);
    return { paths: [], fallback: false };
  }
};

const Disco = ({ disco, lang }) => {
  
  //const lang = useRouter().locale
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
      setError(Keys["errorDiscoDelete"][lang]);
    }
  };

  return (
    <Layout>
      <Head>
      <title>{disco[Languages.includes(lang) ? `name_${lang}` : "name"]}</title>
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
              {Keys["update"][lang]}
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
              {Keys["remove"][lang]}
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Disco;
