// pages/new.js

import React from "react";

import { useRouter } from "next/router";
import { nanoid } from "nanoid";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../comps/layout";
import FormSite from "../../comps/formsite";
import FormMedia from "../../comps/formmedia";
import FormDisco from "../../comps/formdisco";

const New = () => {
  
  const router = useRouter();
  const model = router.query.model;

  const defaultSite = { name: "", headline: "", address: { street: "", city: "", postalCode: ""}, description: "", types: [], styles: [], periods: [], protections: [], pictureID: "patrimonia_green.png", links: [] };
  const defaultMedia = { id: nanoid(8), siteID: "", description_fr: "", description_en: "", source: "", copyright: "" };
  const defaultDisco = { name: "", headline: "", organiserID: "", dateStart: "", dateEnd: "", pictures: [], duration: [], subjects: [], languages: [], address: { street: "", city: "", postalCode: ""} };

  return (
    <Layout>
      <Row style={{ marginTop: 20 }}>
        <Col>
          {model === "site" && <FormSite action="add" input={defaultSite} />}
          {model === "media" && <FormMedia action="add" input={defaultMedia} />}
          {model === "disco" && <FormDisco action="add" input={defaultDisco} />}
        </Col>
      </Row>
    </Layout>
  );
};

export default New;
