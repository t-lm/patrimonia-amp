// pages/index.js

import React, { useEffect, useState } from "react";
import Head from 'next/head';
import Link from 'next/link';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";

import { withSSRContext } from 'aws-amplify';
import { listSites } from '../src/graphql/queries';

import { getCurrentUser } from "../utils/auth";
import Layout from "../comps/layout";
import { SitePill } from "../comps/sitepill";
import { FilterSites } from "../comps/filtersites";

export const getServerSideProps = async ({ req }) => {
  const SSR = withSSRContext({ req });
  try {
    const response = await SSR.API.graphql({ query: listSites });
    return { props: { Sites: response.data.listSites.items }};
  } catch (err) {
    console.log(err);
    return { props: {}};
  }
}

const Index = ({ Sites = [] }) => {

  // state
  const [username, setUsername] = useState();
  const [filter, setFilter] = useState(false);
  const [sites, setSites] = useState(Sites);
  const [open, setOpen] = useState(true);

  // functions
  const handleFilter = (f) => {
    setFilter(f);
    return setSites(Sites.filter((x) => {
      if(f.type) {return x.types.includes(f.type)} 
      else return true
    }));
  };

  useEffect(() => setUsername(getCurrentUser().username), []);
  useEffect(() => { if (window.innerWidth < 1200) setOpen(false)}, []);

  return (
    <Layout>
      <Head>
        <title>Sites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main */}
      <Row id="main" style={{ marginTop: 10 }}>
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
