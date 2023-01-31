// pages/index.js

import { withSSRContext } from 'aws-amplify';

import Head from 'next/head';
import { listSites } from '../src/graphql/queries';

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


const Index = ({ Sites = [] }) => {
  return (
    <Layout>
      <Head>
        <title>Sites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
          {Sites.map((Site) => (
            <a href={`/sites/${Site.id}`} key={Site.id}  style={{textDecoration: "none", color: "black"}}>
              <h3>{Site.name}</h3>
              <p style={{color: "grey"}}>{Site.headline}</p>
            </a>
          ))}
        </main>
    </Layout>
  );
}

export default Index