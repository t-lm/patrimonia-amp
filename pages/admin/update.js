// pages/update.js
//
// all types are managed here

import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { withSSRContext } from "aws-amplify";
import { getMedia, getSite } from "../../src/graphql/queries";

import Layout from "../../comps/layout";
import FormSite from "../../comps/formsite";
import FormMedia from "../../comps/formmedia";

const Update = () => {
  const router = useRouter();

  // props
  const model = router.query.model;
  const id = router.query.id;
  const SSR = withSSRContext();

  // state
  const [input, setInput] = useState();
  const keysOut = ["updatedAt", "createdAt", "owner"];

  useEffect(() => {
    if (model === "site") {
      SSR.API.graphql({ query: getSite, variables: { id } })
        .then((result) => {
          let res = result.data.getSite;
          keysOut.concat(["picture", "media"]).forEach((x) => delete res[x]);
          setInput(res);
        })
        .catch((e) => console.log(e));
    } else if (model === "media") {
      SSR.API.graphql({ query: getMedia, variables: { id } })
        .then((result) => {
          let res = result.data.getMedia;
          keysOut.forEach((x) => delete res[x]);
          setInput(res);
        })
        .catch((e) => console.log(e));
    }
  }, [model, id]);

  return (
    <Layout>
      {input && (
        <>
          {model === "site" && <FormSite action="update" input={input} />}
          {model === "media" && <FormMedia action="update" input={input} />}
        </>
      )}
    </Layout>
  );
};

export default Update;
