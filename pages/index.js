// pages/index.js

import { Amplify, withSSRContext } from 'aws-amplify';

import Head from 'next/head';
import awsExports from '../src/aws-exports';
import { listSites } from '../src/graphql/queries';

Amplify.configure({ ...awsExports, ssr: true });

import Layout from "../comps/layout";


export async function getServerSideProps({ req }) {
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


export default function Sites({ Sites = [] }) {
  return (
    <Layout>
      <Head>
        <title>Sites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <div>
          {Sites.map((Site) => (
            <a href={`/sites/${Site.id}`} key={Site.id}  style={{textDecoration: "none", color: "black"}}>
              <h3>{Site.name}</h3>
              <p style={{color: "grey"}}>{Site.headline}</p>
            </a>
          ))}

        </div>
    </Layout>
  );
}