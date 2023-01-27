// pages/index.js

import Head from 'next/head';
import Link from 'next/link'

import Layout from "../comps/layout";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Patrimonia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 style={{marginTop: 100, textAlign: "center"}}>Patrimonia on Amplify</h1>

      <main style={{marginTop: 50, textAlign: "center"}}>
        {/*<p><Link href="/posts">List Posts</Link>{" - "}<Link href="/admin/post">Create post</Link></p>*/}
        <p><Link href="/sites">Sites</Link>{" - "}<Link href={{pathname: "/admin/new", query:{model: "site"}}}>Create site</Link></p>
      </main>
    </Layout>
  );
}