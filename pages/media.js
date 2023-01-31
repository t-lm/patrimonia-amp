// pages/media.js

import { withSSRContext } from "aws-amplify";

import Head from "next/head";
import { useRouter } from "next/router";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { listMedia } from "../src/graphql/queries";

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

const Media = ({ Media = [] }) => {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {Media.map((medium) => (
          <Row key={medium.id}>
            <Col>
            <Image
              rounded={true}
              alt="Statit"
              src={`https://patrimonia-amp175328-dev.s3.eu-west-1.amazonaws.com/public/${medium.id}`}
              width="20"
              height="20"
              className="d-inline-block align-top"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/logo_pink.png"
              }} // fallback
              style={{ marginRight: 10 }}
            />
              {medium.description_fr}
          {" - "}
          <button
            style={{ margin: 0, padding: 0, border: 0, backgroundColor: "white" }}
            onClick={() => router.push({pathname: "/admin/update", query: {model: "media", id: medium.id }})}
          >
            update
          </button>
          </Col>
          </Row>
        ))}
    </Layout>
  );
}

export default Media