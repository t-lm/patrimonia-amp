// pages/new.js

import React from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import { nanoid } from "nanoid";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../comps/layout";

import FormDisco from "../../comps/formdisco";
import FormMedia from "../../comps/formmedia";
import FormOrganiser from "../../comps/formorganiser";
import FormSite from "../../comps/formsite";

const New = () => {
  
  const router = useRouter();
  const model = router.query.model;
  const lang = useRouter().locale

  const defaultDisco = { name: "", headline: "", organiserID: "", dateStart: "", dateEnd: "", type: "", price: "", priceCommentary: "", format: "", siteID: "", audiences: [], pictures: [], duration: [], subjects: [], languages: [], persons: [], events: [], periods: [], styles: [], address: { street: "", city: "", postalCode: ""}, practicalInfo: "", openingHours: { sun: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [] }, bookingRequired: false, description: "", dates: []};
  const defaultMedia = { id: nanoid(8), siteID: "", description_fr: "", description_en: "", source: "", copyright: "" };
  const defaultOrganiser = { name: "", description_fr: "", www: "", phone: "", email: "", address: { street: "", city: "", postalCode: ""} };
  const defaultSite = { name: "", headline: "", address: { street: "", city: "", postalCode: ""}, description: "", types: [], styles: [], periods: [], protections: [], pictureID: "", links: [] };
  
  return (
    <Layout>
      <Head>
        <title>Création</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row style={{ marginTop: 20 }}>
        <Col>
          {model === "disco" && <FormDisco lang={lang} action="add" input={defaultDisco} />}
          {model === "media" && <FormMedia lang={lang} action="add" input={defaultMedia} />}
          {model === "organiser" && <FormOrganiser lang={lang} action="add" input={defaultOrganiser} />}  
          {model === "site" && <FormSite lang={lang} action="add" input={defaultSite} />}  
        </Col>
      </Row>
    </Layout>
  );
};

export default New;
