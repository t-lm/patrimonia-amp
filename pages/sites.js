// pages/sites.js

import { Amplify, withSSRContext } from 'aws-amplify';
import Head from 'next/head';
import awsExports from '../src/aws-exports';
import { listSites } from '../src/graphql/queries';
import styles from '../styles/Home.module.css';

Amplify.configure({ ...awsExports, ssr: true });

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


export default function Home({ Sites = [] }) {
  return (
    <div>
      <Head>
        <title>Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sites</h1>

        <p className={styles.description}>
          <code className={styles.code}>{Sites.length}</code>
          sites
        </p>

        <div>
          {Sites.map((Site) => (
            <a href={`/Sites/${Site.id}`} key={Site.id}>
              <h3>{Site.name}</h3>
              <p>{Site.headline}</p>
            </a>
          ))}

        </div>
      </main>
    </div>
  );
}