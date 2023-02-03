// pages/index.js
//
// not the right way to access dynamo - needs to be through IAM


import React, { useEffect, useState } from "react";
import Head from 'next/head';
import Link from 'next/link';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";

import { API } from 'aws-amplify';
import { listSites } from '../src/graphql/queries';

import { getCurrentUser } from "../utils/auth";
import { Keys } from "../utils/dictionary";

import Layout from "../comps/layout";
import { FilterSites } from "../comps/filtersites";
import { Frieze } from "../comps/frieze";
import { SitePill } from "../comps/sitepill";



const LANG = "fr"

export const getStaticProps = async () => {
  
  try {
    const response = await API.graphql({ query: listSites, authMode: 'AWS_IAM' });
    return { props: { Sites: response.data.listSites.items }};
  } catch (err) {
    console.log(err);
    return { props: {}};
  }
}

const Index = ({ Sites = [] }) => {

  // state
  const [username, setUsername] = useState();
  const [filter, setFilter] = useState();
  const [sites, setSites] = useState(Sites);
  const [open, setOpen] = useState(true);

  // functions
  const handleFilter = (f) => {
    let filt = { ...filter };
    filt[Object.keys(f)[0]] = f[Object.keys(f)[0]];
    setFilter(filt);

    return setSites(
      Sites
        .filter((x) => {
          if (filt.type) {
            return x.types.includes(filt.type);
          } else return true;
        })
        .filter((x) => {
          if (filt.period) {
            return x.periods.includes(filt.period);
          } else return true;
        })
    );
  };

  useEffect(() => setUsername(getCurrentUser().username), []);
  useEffect(() => { if (window.innerWidth < 1200) setOpen(false)}, []);

  return (
    <Layout>
      <Head>
        <title>Sites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Welcome */}
      <Row
        style={{
          marginBottom: "2rem",
          height: 400,
          borderRadius: ".3rem",
        }}
      >
        <Col>
          <div
            style={{
              width: "100%",
              height: 400,
              backgroundImage: "url(/var/etang-de-montady.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div
              style={{
                backgroundColor: "#d4e9fb",
                top: "50%",
                margin: "0px 100px 0px 10px",
                position: "relative",
                padding: "5px 10px",
                fontSize: "2rem",
                fontWeight: "bold",
                borderRadius: 5,
                lineHeight: "normal",
              }}
            >
              {Keys[LANG]["welcome"]}{' '}
            </div>
          </div>
        </Col>
      </Row>

      <Frieze />

      {/* Main */}
      <Row id="main" style={{ marginTop: 0 }}>
        {/* Filters */}
        <Collapse in={open}>
          <Col md={3} style={{ marginTop: 10 }}>
            <FilterSites cb={(x) => handleFilter(x)} filter={filter} />
          </Col>
        </Collapse>
        <Col id="list" md={9}>
          {sites.map(site => <SitePill key={site.id} site={site} /> )}
        </Col>
      </Row>
          
        { username && username === "tlm" && 
          <div style={{marginTop: 50}}>
            <Link style={{color: "black", textDecoration: "none"}} href={{pathname: "/admin/new", query:{model: "site"}}}>Add new site</Link>
          </div>
          }
    </Layout>
  );
}

export default Index
