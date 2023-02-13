// pages/update.js

import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import { API } from 'aws-amplify';

import {
  getDisco,
  getMedia,
  getOrganiser,
  getSite,
} from "../../src/graphql/queries";

import Layout from "../../comps/layout";

import FormDisco from "../../comps/formdisco";
import FormMedia from "../../comps/formmedia";
import FormOrganiser from "../../comps/formorganiser";
import FormSite from "../../comps/formsite";

const Update = () => {
  const router = useRouter();
  const model = router.query.model;
  const id = router.query.id;
  const lang = useRouter().locale

  // state
  const [input, setInput] = useState();

  useEffect(() => {

    if (model === "disco") {
      API.graphql({ query: getDisco, variables: { id } })
        .then((result) => {
          let res = result.data.getDisco;
          ["organiser","site", "updatedAt", "createdAt", "owner"].forEach((x) => delete res[x]);
          setInput(res);
        })
        .catch((e) => console.error(e));
    }

    else if (model === "media") {
      API.graphql({ query: getMedia, variables: { id } })
        .then((result) => {
          let res = result.data.getMedia;
          ["updatedAt", "createdAt", "owner"].forEach((x) => delete res[x]);
          setInput(res);
        })
        .catch((e) => console.error(e));
    }


    else if (model === "organiser") {
      API.graphql({ query: getOrganiser, variables: { id } })
        .then((result) => {
          let res = result.data.getOrganiser;
          ["updatedAt", "createdAt", "owner"].forEach((x) => delete res[x]);
          setInput(res);
        })
        .catch((e) => console.error(e));
    }

    else if (model === "site") {
      API.graphql({ query: getSite, variables: { id } })
        .then((result) => {
          let res = result.data.getSite;
          ["updatedAt", "createdAt", "owner", "picture", "media"].forEach(
            (x) => delete res[x]
          );
          setInput(res);
        })
        .catch((e) => console.error(e));
    }
  }, [model, id]);

  return (
    <Layout>
        <Head>
        <title>Modification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {input && (
        <>
          {model === "disco" && <FormDisco lang={lang} action="update" input={input} />}
          {model === "media" && <FormMedia lang={lang} action="update" input={input} />}
          {model === "organiser" && <FormOrganiser lang={lang} action="update" input={input} />}
          {model === "site" && <FormSite lang={lang} action="update" input={input} />}
        </>
      )}
    </Layout>
  );
};

export default Update;
