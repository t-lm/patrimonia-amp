// pages/index.js

import { Amplify, API, withSSRContext } from 'aws-amplify';
import Head from 'next/head';
import awsExports from '../src/aws-exports';
import { listPosts } from '../src/graphql/queries';
import styles from '../styles/Home.module.css';

import Link from 'next/link'

Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  try {
    const response = await SSR.API.graphql({ query: listPosts });
    return {
      props: {
        posts: response.data.listPosts.items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
}


export default function Indexw({ posts = [] }) {
  return (
    <div>
      <Head>
        <title>Patrimonia Amplify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 style={{marginTop: 100, textAlign: "center"}}>Patrimonia Amplify</h1>

      <main style={{marginTop: 50, textAlign: "center"}}>
        <p><Link href="/posts">List Posts</Link>{" - "}<Link href="/admin/post">Create post</Link></p>
        <p><Link href="/sites">Sites</Link>{" - "}<Link href="/admin/site">Create site</Link></p>
      </main>
    </div>
  );
}