// pages/media.js

import { Amplify, withSSRContext } from "aws-amplify";

import Head from "next/head";
import { useRouter } from "next/router";

import awsExports from "../src/aws-exports";
import { listMedia } from "../src/graphql/queries";

Amplify.configure({ ...awsExports, ssr: true });

import Layout from "../comps/layout";

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  try {
    const response = await SSR.API.graphql({ query: listMedia });
    return {
      props: {
        Media: response.data.listMedia.items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
}

export default function Media({ Media = [] }) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {Media.map((medium) => (
          <li key={medium.id}>
            {medium.id}
            <a
              href={`/media/${medium.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {medium.description_fr}
            </a>
          {" - "}
          <button
            style={{ margin: 0, padding: 0, border: 0, backgroundColor: "white" }}
            onClick={() => router.push({pathname: "/admin/update", query: {model: "media", id: medium.id }})}
          >
            update
          </button>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
