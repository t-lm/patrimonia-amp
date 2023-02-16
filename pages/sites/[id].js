// ./pages/sites/[id].js

import React, { useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

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

const Keys = require("../../utils/Keys.json");
const { Languages } = require("../../utils/auth");
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
    console.error(err);
    return { props: {}, revalidate: 10 };
  }
};

export async function getStaticPaths() {
  const response = await API.graphql({ query: listSites, authMode: "AWS_IAM" });
  const pathsFR = response.data.listSites.items.map((s) => { return ({ params: { id: s.id, }, locale: "fr" })})
  const pathsEN = response.data.listSites.items.map((s) => { return ({ params: { id: s.id }, locale: "en" }) })
  const pathsES = response.data.listSites.items.map((s) => { return ({ params: { id: s.id }, locale: "es" }) })
  const pathsDE = response.data.listSites.items.map((s) => { return ({ params: { id: s.id }, locale: "de" }) })
  const pathsNL = response.data.listSites.items.map((s) => { return ({ params: { id: s.id }, locale: "nl" }) })
  return { paths: pathsFR.concat(pathsEN).concat(pathsES).concat(pathsDE).concat(pathsNL), fallback: false };
}

const Site = ({ site, discos }) => {
  const lang = useRouter().locale;
  const [username, setUsername] = useState(false);
  useEffect(() => setUsername(getCurrentUser().username), []);

  async function handleDeleteSite() {
    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: deleteSite,
        variables: { input: { id: site.id } },
      });
      window.location.href = "/";
    } catch (e) {
      console.error(e);
      setError(Keys["errorSiteDelete"][lang]);
    }
  }

  return (
    <Layout>
      <Head>
        <title>{site[Languages.includes(lang) ? `name_${lang}` : "name"]}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* basics */}
        <SiteBasics site={site} lang={lang} />

        {/* pictures */}
        {site.media.items.length > 0 && (
          <SitePictures
            site={site}
            lang={lang}
            media={site.media.items.filter((x) => x.id !== site.pictureID)}
          />
        )}

        {/* Key facts */}
        {(site.periods ||
          site.styles ||
          site.persons ||
          site.events ||
          site.protections) && <SiteFacts site={site} lang={lang} />}

        {/* Description */}
        {site.description && <SiteDescription site={site} lang={lang} />}

        {/* Discoveries */}
        {discos.length > 0 && (
          <div
            style={{
              marginTop: 20,
              backgroundColor: "white",
              padding: 10,
              color: "black",
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>{Keys["Discover"][lang]}</h3>
            <DiscosList discos={discos} filter={{}} lang={lang} />
          </div>
        )}

        {/* Further on */}
        {site.links && site.links.length > 0 && (
          <SiteLinks site={site} lang={lang} />
        )}

        {[site.ambassadorID, "tlm"].includes(username) && (
          <>
            <div
              style={{
                marginTop: 30,
                backgroundColor: "white",
                border: "1px solid pink",
                color: "black",
                fontWeight: "bold",
                padding: "5px 30px",
                borderRadius: 5,
                width: 200,
                textAlign: "center",
              }}
            >
              <Link
                style={{ color: "black" }}
                href={{
                  pathname: "/admin/update",
                  query: { model: "site", id: site.id },
                }}
              >
                {Keys["update"][lang]}
              </Link>
            </div>
            <div
              style={{
                marginTop: 20,
                borderTop: "1px solid #eee",
                paddingTop: 20,
              }}
            >
              <button
                onClick={() => handleDeleteSite()}
                size="md"
                style={{
                  backgroundColor: "white",
                  border: "1px dotted pink",
                  color: "grey",
                  padding: "5px 30px",
                  borderRadius: 5,
                  width: 200,
                  fontStyle: "italic",
                }}
              >
                {Keys["remove"][lang]}
              </button>
            </div>
          </>
        )}
      </main>
    </Layout>
  );
};

export default Site;
