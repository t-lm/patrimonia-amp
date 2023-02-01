// pages/index.js

import React, { useEffect, useState } from "react";
import Head from 'next/head';
import Link from 'next/link';

import { withSSRContext } from 'aws-amplify';
import { listSites } from '../src/graphql/queries';

import { getCurrentUser } from "../utils/auth";
import Layout from "../comps/layout";
import { SitePill } from "../comps/sitepill";

export const getServerSideProps = async ({ req }) => {
  const SSR = withSSRContext({ req });
  try {
    const response = await SSR.API.graphql({ query: listSites });
    return {
      props: {
        Sites: response.data.listSites.items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
}

const Index = ({ Sites = [] }) => {


  const [username, setUsername] = useState();
  useEffect(() => setUsername(getCurrentUser().username), []);

  return (
    <Layout>
      <Head>
        <title>Sites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
          {Sites.map(site => <SitePill key={site.id} site={site} /> )}
        </main>

        { username && username === "tlm" && 
          <Link style={{color: "black", textDecoration: "none"}} href={{pathname: "/admin/new", query:{model: "site"}}}>Add new site</Link>
          }
    </Layout>
  );
}

export default Index
