// pages/admin/index.js

import Head from 'next/head';
import Link from 'next/link'

import Layout from "../../comps/layout";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Patrimonia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <p>Manage</p>
      <ul style={{marginTop: 30}}>
        <li><Link style={{color: "black", textDecoration: "none"}} href={{pathname: "/new", query:{model: "site"}}}>Create site</Link></li>
        <li><Link style={{color: "black", textDecoration: "none"}} href={{pathname: "/new", query:{model: "media"}}}>Create media</Link></li>
      </ul>
    </Layout>
  );
}