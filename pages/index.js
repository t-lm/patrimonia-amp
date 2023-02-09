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
import { DiscosFilter } from "../comps/discosfilter";
import { DiscosList } from "../comps/discoslist";
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

  let startPeriod = new Date()
  startPeriod.setDate(1)
  let endPeriod = new Date()
  endPeriod.setUTCMonth(endPeriod.getMonth() + 1)
  endPeriod.setDate(0)

  // state
  const [username, setUsername] = useState();
  const [discos, setDiscos] = useState([]);
  const [filter, setFilter] = useState({periodType: "month", startPeriod: startPeriod.toISOString().slice(0, 10), endPeriod: endPeriod.toISOString().slice(0, 10)});

  const updateFilter = (f) => {
    let fil = {...filter}
    Object.keys(f).forEach(x => {
      fil[x] = f[x]
    })
    setFilter(fil)
  }

  useEffect(() => {
    
    setDiscos(
      Discos
        .filter((x) => {
          if (filter.type && filter.type !== "") {
            return x.type === filter.type;
          } else return true;
        })
        .filter((x) => {
          if (filter.subject && filter.subject !== "") {
            return x.subjects.includes(filter.subject);
          } else return true;
        })
        .filter((x) => {
          if (filter.audience && filter.audience !== "") {
            return x.audiences.includes(filter.audience);
          } else return true;
        })
        .filter((x) => {
          if (filter.startPeriod && filter.startPeriod !== "") {
            return ( new Date(x.dateEnd) > new Date(filter.startPeriod) );
          } else return true;
        })
        .filter((x) => {
          if (filter.endPeriod && filter.endPeriod !== "") {
            return ( new Date(x.dateStart) < new Date(filter.endPeriod) );
          } else return true;
        })
    )

  }, [Discos, filter]);
  useEffect(() => setUsername(getCurrentUser().username), []);

  return (
    <Layout>
      <Head>
        <title>Patrimonia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Welcome */}
      <Welcome />

      {/* Filter */}
      <DiscosFilter filter={filter} cb={(x) => updateFilter(x) } />

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
