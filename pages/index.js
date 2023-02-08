// pages/index.js

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { API } from "aws-amplify";
import { listDiscos } from "../src/graphql/queries";

import { getCurrentUser } from "../utils/auth";
import Layout from "../comps/layout";
import { DiscosFilter } from "../comps/discosfilter";
import { DiscosList } from "../comps/discoslist";
import { Welcome } from "../comps/welcome";

export const getStaticProps = async () => {
  try {
    const response = await API.graphql({ query: listDiscos, authMode: "AWS_IAM" });
    return { props: { Discos: response.data.listDiscos.items }, revalidate: 10 };
  } catch (err) {
    console.log(err);
    return { props: {}, revalidate: 10 };
  }
};

const Index = ({ Discos = [] }) => {

  // state
  const [username, setUsername] = useState();
  const [discos, setDiscos] = useState(Discos);

  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => setUsername(getCurrentUser().username), []);

  const handleFilter = (f) => {
    let filt = { ...filter };
    filt[Object.keys(f)[0]] = f[Object.keys(f)[0]];
    setFilter(filt);

    return setDiscos(
      allDiscos
        .filter((x) => {
          if (filt.type) {
            return x.type === filt.type;
          } else return true;
        })
        .filter((x) => {
          if (filt.subject) {
            return x.subjects.includes(filt.subject);
          } else return true;
        })
        .filter((x) => {
          if (filt.audience) {
            return x.audiences.includes(filt.audience);
          } else return true;
        })
        .filter((x) => {
          if (filt.month) {
            let startPeriod = new Date(filt.month);
            startPeriod.setDate(1);
            startPeriod.setHours(1);
            let month = startPeriod.getMonth();
            let endPeriod = new Date(filt.month);
            endPeriod.setMonth(month + 1);
            endPeriod.setDate(0);
            endPeriod.setHours(23);
            return (
              new Date(x.dateStart) < endPeriod &&
              new Date(x.dateEnd) > startPeriod
            );
          } else return true;
        })
    );
  };

  return (
    <Layout>
      <Head>
        <title>Patrimonia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Welcome */}
      <Welcome />

      {/* Filter */}
      <DiscosFilter filter={{month: today}} cb={(x) => handleFilter(x)} />

      {/* Main */}
      <DiscosList discos={discos} />
      
      {/* Admin */}
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
