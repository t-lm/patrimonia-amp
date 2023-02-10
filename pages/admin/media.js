// pages/media.js

import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";

import Head from "next/head";
import Link from "next/link";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { mediaBySiteID, listSites } from "../../src/graphql/queries";

import Layout from "../../comps/layout";
import { getCurrentUser } from "../../utils/auth";

const Media = () => {

  const [username, setUsername] = useState();
  const [sites, setSites] = useState([])
  const [media, setMedia] = useState([])
  const [filter, setFilter] = useState("cathedrale-saint-nazaire-beziers")
  
  useEffect(() => setUsername(getCurrentUser().username), []);
  useEffect(() => {
    API.graphql({ query: listSites })
    .then(res => setSites(res.data.listSites.items.sort((a,b) => a.id > b.id ? 1 : -1)))
    .catch(e => console.error(e))
  },[])

  useEffect(() => {
    API.graphql({ query: mediaBySiteID, variables: { siteID: filter, limit: 20 }})
    .then(res => setMedia(res.data.mediaBySiteID.items))
    .catch(e => console.error(e))
  },[filter])

  return (
    <Layout>
      <Head>
        <title>Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h4 style={{fontWeight: "bold"}}>Media</h4>
      {/* filter here */}
      <Form>
      <Form.Group as={Row} style={{ marginTop: 30, marginBottom: 50 }}>
          <Col sm="9">
            <Form.Select size="sm" value={filter} onChange={(e) => setFilter(e.target.value)}>
              {sites.map(x => <option key={x.id} value={x.id}>{x.id}</option>)}
            </Form.Select>
          </Col>
        </Form.Group>
      </Form>

      {media.map((medium) => (
        <Row key={medium.id} style={{ marginTop: 20 }}>
          <Col sm={3} md={2}>
              <Image
                rounded={true}
                alt={medium.description_fr}
                src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/sites/${medium.id}`}
                width="50"
                height="50"
                className="d-inline-block align-top"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/logo_pink.png";
                }} // fallback
                style={{ marginRight: 10, objectFit: "cover" }}
              />  
          </Col>
          <Col md={9}>
            <Link style={{color: "black", textDecoration: "none", display: "block"}} href={{pathname: "/admin/update", query: { model: "media", id: medium.id }}}>{medium.description_fr}</Link>
            <span style={{color: "grey", fontSize: "0.9rem"}}>{medium.leading && "LEADING - "}{medium.siteID}{' - '}{medium.source}{' - '}{medium.copyright}{' - '}{medium.id}</span>
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
