// pages/update.js
// 
// all types are managed here

import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { Amplify, withSSRContext } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { getSite } from "../src/graphql/queries";

import Layout from "../comps/layout";
import FormSite from "../comps/formsite";

Amplify.configure({ ...awsExports, ssr: true });

const Update = () => {
  const router = useRouter();
  
  // props
  const model = router.query.model;
  const id = router.query.id;
  const SSR = withSSRContext();

  // state
  const [input, setInput] = useState();

  const defaultSite = { name: "", headline: "", types: [], address: { street: "", city: "", postalCode: ""} };
  const keysOut = ["updatedAt", "createdAt", "owner"]
  useEffect(() => {
  
    {
      model === "site" &&
        SSR.API.graphql({ query: getSite, variables: { id } })
          .then((result) => {
            let res = result.data.getSite
            keysOut.forEach(x => delete res[x])
            Object.keys(defaultSite).forEach(x => {
              if (!(x in res) || res[x] === null) res[x] = defaultSite[x]
            })
            setInput(res)
          })
          .catch((e) => console.log(e));
    }
  }, [model, id]);

  return (
    <Layout>
      {input && (
        <>{model === "site" && <FormSite action="update" input={input} />}</>
      )}
    </Layout>
  );
};

export default Update;
