// pages/media.js

import React, { useEffect, useState } from "react";
import { withSSRContext } from "aws-amplify";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { listMedia } from "../src/graphql/queries";

import Layout from "../comps/layout";
import { getCurrentUser } from "../utils/auth";

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

const Media = ({ Media = [] }) => {
  const router = useRouter();

  const [username, setUsername] = useState();
  useEffect(() => setUsername(getCurrentUser().username), []);

  return (
    <Layout>
      <Head>
        <title>Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {Media.map((medium) => (
        <Row key={medium.id} style={{ marginTop: 20 }}>
          <Col md={3}>
              <Image
                rounded={true}
                alt={medium.description_fr}
                src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/${medium.id}`}
                width="50"
                height="50"
                className="d-inline-block align-top"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/logo_pink.png";
                }} // fallback
                style={{ marginRight: 10 }}
              />  
          </Col>
          <Col md={9}>
            <Link style={{color: "black", textDecoration: "none", display: "block"}} href={{pathname: "/admin/update", query: { model: "media", id: medium.id }}}>{medium.description_fr}</Link>
            <span style={{color: "grey", fontSize: "0.9rem"}}>{medium.leading && "LEADING - "}{medium.siteID}{' - '}{medium.source}{' - '}{medium.copyright}</span>
          </Col>
        </Row>
      ))}

      {username && username === "tlm" && (
        <Row style={{ marginTop: 50 }}>
          <Col>
            <Link
              style={{ color: "black" }}
              href={{ pathname: "/admin/new", query: { model: "media" } }}
            >
              Add new media
            </Link>
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default Media;
