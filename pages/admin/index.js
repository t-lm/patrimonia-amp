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
      <ul style={{marginTop: 30, padding: 15}}>
        <li>
          <Link style={{color: "black", textDecoration: "none"}} href={{pathname: "/sites"}}>List sites</Link>{' - '}
          <Link style={{color: "black", textDecoration: "none"}} href={{pathname: "/admin/new", query:{model: "site"}}}>Add new site</Link>
        </li>
        <li>
          <Link style={{color: "black", textDecoration: "none"}} href={{pathname: "/media"}}>List media</Link>{' - '}
          <Link style={{color: "black", textDecoration: "none"}} href={{pathname: "/admin/new", query:{model: "media"}}}>Add new media</Link>
        </li>
      </ul>
    </Layout>
  );
}