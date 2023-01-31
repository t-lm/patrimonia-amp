// pages/new.js

import React from "react";

import { useRouter } from "next/router";
import { nanoid } from "nanoid";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../comps/layout";
import FormSite from "../../comps/formsite";
import FormMedia from "../../comps/formmedia";

const defaultSite = { name: "", headline: "", types: [], address: { street: "", city: "", postalCode: ""} };
const defaultMedia = { id: nanoid(8), siteID: "", description_fr: "", description_en: "", source: "", copyright: "" };

const New = () => {
  
  const router = useRouter();
  const model = router.query.model;

  return (
    <Layout>
      <Row style={{ marginTop: 20 }}>
        <Col>
          {model === "site" && <FormSite action="add" input={defaultSite} />}
          {model === "media" && <FormMedia action="add" input={defaultMedia} />}
        </Col>
      </Row>
    </Layout>
  );
};

export default New;
