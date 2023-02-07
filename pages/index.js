// pages/index.js

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { API } from "aws-amplify";
import { listSites } from "../src/graphql/queries";

import { getCurrentUser } from "../utils/auth";

import Layout from "../comps/layout";
import { FilterSites } from "../comps/filtersites";
import { Frieze } from "../comps/frieze";
import { SitePill } from "../comps/sitepill";


export const getStaticProps = async () => {
  try {
    const response = await API.graphql({
      query: listSites,
      authMode: "AWS_IAM",
    });
    return { props: { Sites: response.data.listSites.items } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

const Index = ({ Sites = [] }) => {
  // state
  const [username, setUsername] = useState();
  const [filter, setFilter] = useState();
  const [sites, setSites] = useState(Sites);


  // functions
  const handleFilter = (f) => {
    let filt = { ...filter };
    filt[Object.keys(f)[0]] = f[Object.keys(f)[0]];
    setFilter(filt);
    console.log(filt)

    return setSites(
      Sites.filter((x) => {
        if (filt.type && filt.type !== "") {
          return x.types.includes(filt.type);
        } else return true;
      }).filter((x) => {
        if (filt.period && filt.period !== "") {
          return x.periods.includes(filt.period);
        } else return true;
      })
    );
  };

  useEffect(() => setUsername(getCurrentUser().username), []);

  return (
    <Layout>
      <Head>
        <title>Patrimonia | Le patrimoine bâti avec ses meilleurs guides</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Welcome */}
      <Frieze style={{ marginTop: 10 }} />

      <div
        style={{
          width: "100%",
          //backgroundColor: "#aaa",
          //backgroundColor: "#d4e9fb",
          backgroundColor: "#edebea",
          fontSize: "2rem",
          fontWeight: 700,
          padding: "10px 20px",
          marginTop: 20,
          lineHeight: "2.5rem"
        }}
      >
        <span> 
          DÉCOUVRIR LE PATRIMOINE AVEC SES MEILLEURS GUIDES
          <Image src="/var/noun-family.svg" height={40} width={40} style={{marginLeft: 10}}/>
          <Image src="/var/noun-man.svg" height={40} width={40} style={{marginLeft: 10}}/>
          <Image src="/var/noun-woman.svg" height={40} width={40} style={{marginLeft: 10}}/>
          <Image src="/var/noun-pet.svg" height={40} width={40} style={{marginLeft: 10}}/>
        </span>
        <span style={{ display: "block" }}>
        
        
        </span>
        <span> 
        
        
        </span>
      </div>

      {/* Main */}
      <div style={{marginTop: 30}}>
        <FilterSites cb={(x) => handleFilter(x)} filter={filter} />
      </div>
     
      {sites.map((site) => (
        <SitePill key={site.id} site={site} />
      ))}


      {username && username === "tlm" && (
        <div style={{ marginTop: 50 }}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            href={{ pathname: "/admin/new", query: { model: "site" } }}
          >
            Add new site
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Index;
