// ./pages/sites/[id].js

import React, { useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { API, withSSRContext } from "aws-amplify";
import { deleteSite } from "../../src/graphql/mutations";
import { getSite, listMedia } from "../../src/graphql/queries";

import Button from "react-bootstrap/Button";

import Layout from "../../comps/layout";
import { SiteBasics } from "../../comps/sitebasics";
import { SitePictures } from "../../comps/sitepictures";
import { getCurrentUser } from "../../utils/auth";

export async function getServerSideProps({ req, params }) {
  
  const SSR = withSSRContext({ req });
  
  const { data } = await SSR.API.graphql({
    query: getSite,
    variables: { id: params.id },
  });

  const response = await SSR.API.graphql({ query: listMedia });

  return {
    props: {
      site: data.getSite,
      media: response.data.listMedia.items
    }
  };
}

const Site = ({ site, media }) => {
  const router = useRouter();

  // authentication
  const [username, setUsername] = useState(false);
  useEffect(() => {
    setUsername(getCurrentUser().username);
  }, []);

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
    }
    x;
  }

  return (
    <Layout>
      <Head>
        <title>{site.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        {/* basics */}
        <SiteBasics site={site} />

        {/* pictures */}
        <SitePictures site={site} media={media} /> 
        
       
        {username === "tlm" && (
          <>
            <Link
              style={{
                color: "black",
                margin: 0,
                padding: 0,
                display: "block",
              }}
                href={{
                  pathname: "/admin/update",
                  query: { model: "site", id: site.id }
                }}
            >
              Update site
            </Link>

            <Button
              variant="link"
              style={{
                color: "black",
                margin: 0,
                padding: 0,
                display: "block",
              }}
              onClick={handleDelete}
            >
              Delete site
            </Button>
          </>
        )}
      </main>
    </Layout>
  );
};

export default Site;
