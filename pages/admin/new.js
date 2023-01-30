// pages/new.js

import React from "react";

import { useRouter } from "next/router";

import { Amplify } from "aws-amplify";
import awsExports from "../../src/aws-exports";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../comps/layout";
import FormSite from "../../comps/formsite";

Amplify.configure({ ...awsExports, ssr: true });

const defaultSite = { name: "", headline: "", types: [], address: { street: "", city: "", postalCode: ""} };

const New = () => {
  const router = useRouter();
  const model = router.query.model;

  return (
    <Layout>
      <Row style={{ marginTop: 20 }}>
        <Col>
          {model === "site" && <FormSite action="add" input={defaultSite} />}
        </Col>
      </Row>
    </Layout>
  );
};

export default New;
