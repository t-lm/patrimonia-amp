// ./pages/sites/[id].js

import React, { useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { API } from "aws-amplify";
import { getSite, listSites, discosBySiteID } from "../../src/graphql/queries";

import Layout from "../../comps/layout";
import { SiteBasics } from "../../comps/sitebasics";
import { SiteDescription } from "../../comps/sitedescription";
import { SiteFacts } from "../../comps/sitefacts";
import { SiteLinks } from "../../comps/sitelinks";
import { SitePictures } from "../../comps/sitepictures";
import { DiscosList } from "../../comps/discoslist";
import { getCurrentUser } from "../../utils/auth";

const today = new Date().toISOString().slice(0, 10);

export const getStaticProps = async ({ params }) => {
  try {
    const { data } = await API.graphql({
      query: getSite,
      variables: { id: params.id },
      authMode: "AWS_IAM",
    });
    const response = await API.graphql({
      query: discosBySiteID,
      variables: { siteID: params.id, filter: { dateEnd: { gt: today } } },
      authMode: "AWS_IAM",
    });
    return {
      props: { site: data.getSite, discos: response.data.discosBySiteID.items },
      revalidate: 10,
    };
  } catch (err) {
    console.log(err);
    return { props: {}, revalidate: 10 };
  }
};

export async function getStaticPaths() {
  const response = await API.graphql({ query: listSites, authMode: "AWS_IAM" });
  const paths = response.data.listSites.items.map((s) => {
    return {
      params: {
        id: s.id,
      },
    };
  });

  return { paths, fallback: false };
}

const Site = ({ site, discos }) => {
  const router = useRouter();
  const [username, setUsername] = useState(false);
  useEffect(() => setUsername(getCurrentUser().username), []);

  if (router.isFallback) {
    return (
      <div>
        <h1>Loading&hellip;</h1>
      </div>
    );
  }

  async function handleDelete() {
    /*
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
    */
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
        {site.media.items.length > 0 && (
          <SitePictures
            site={site}
            media={site.media.items.filter((x) => x.id !== site.pictureID)}
          />
        )}

        {/* Key facts */}
        {(site.periods ||
          site.styles ||
          site.persons ||
          site.events ||
          site.protections) && <SiteFacts site={site} />}

        {/* Description */}
        {site.description && <SiteDescription site={site} />}

        {/* Discoveries */}
        {discos.length > 0 && 
          <div
            style={{
              marginTop: 20,
              backgroundColor: "white",
              padding: 10,
              color: "black",
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>Visites et évènements</h3>
            <DiscosList discos={discos} filter={{}} />
          </div>
        }

        {/* Further on */}
        {site.links && site.links.length > 0 && <SiteLinks site={site} />}

        {username === "tlm" && (
          <Row style={{ marginTop: 30 }}>
            <Col>
              <Link
                style={{color: "black" }}
                href={{
                  pathname: "/admin/update",
                  query: { model: "site", id: site.id },
                }}
              >
                Mettre à jour le site
              </Link>
            </Col>
          </Row>
        )}
      </main>
    </Layout>
  );
};

export default Site;
