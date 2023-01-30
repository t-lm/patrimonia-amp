// ./pages/sites/[id].js

import Head from "next/head";
import { useRouter } from "next/router";

import { Amplify, API, withSSRContext } from "aws-amplify";

import awsExports from "../../src/aws-exports";
import { deleteSite } from "../../src/graphql/mutations";
import { getSite } from "../../src/graphql/queries";

import Button from "react-bootstrap/Button";

import Layout from "../../comps/layout";
import { SiteBasics } from "../../comps/sitebasics";

Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ req, params }) {
  
  const SSR = withSSRContext({ req });
  const { data } = await SSR.API.graphql({
    query: getSite,
    variables: {
      id: params.id,
    },
  });
  return {
    props: {
      site: data.getSite,
    },
  };
}

export default function Site({ site }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div>
        <h1>Loading&hellip;</h1>
      </div>
    );
  }

  async function handleDelete() {
    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: deleteSite,
        variables: {
          input: { id: site.id },
        },
      });

      window.location.href = "/";
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }x
  }

  return (
    <Layout>
      <Head>
        <title>{site.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SiteBasics site={site} />
      </main>

        <Button
          variant="link"
          style={{ color: "black", margin: 0, padding: 0 }}
          onClick={() => router.push({pathname: "/admin/update", query: {model: "site", id: site.id }})}
        >
          Update site
        </Button>
      
        <Button
          variant="link"
          style={{ color: "black", margin: 0, padding: 0 }}
          onClick={handleDelete}
        >
          Delete site
        </Button>
    </Layout>
  );
}
