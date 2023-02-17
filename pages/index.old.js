// pages/index.js

import React, { useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { API } from "aws-amplify";
import { listSites } from "../src/graphql/queries";

import Layout from "../comps/layout";
import { SitesFilter } from "../comps/sitesfilter";
import { SitePill } from "../comps/sitepill";


export const getStaticProps = async () => {
  try {
    const response = await API.graphql({
      query: listSites,
      authMode: "AWS_IAM",
    });
  //  return { props: { Sites: response.data.listSites.items }, revalidate: 10 };
  return { props: { Sites: response.data.listSites.items } };
  } catch (err) {
    console.error(err);
  //  return { props: {}, revalidate: 10 };
  return { props: {} };
  }
};

const FilterPeriodOptions = {
  1: {fr: " XIXe - XXIe siècle", values: ["xix", "xx", "xxi"] },
  2: {fr: " XVIe - XVIIIe siècle", values: ["xvi", "xvi", "xvii", "xviii"] },
  3: {fr: " XIe - XVe siècle", values: ["xi","xii","xiv","xiv","xv"] },
  4: {fr: " VIe - Xe siècle", values: ["vi","vii","viii","ix","x"] },
  5: {fr: " Ier - Ve siècle", values: ["v","iv","iii","ii","i"] },
  6: {fr: " Ve - Ier siècle avant JC", values: ["-v","-iv","-iii","-ii","-i"] },
  7: {fr: "< Ve siècle avant JC", values: ["<-V"] }
}

const Sites = ({ Sites = [] }) => {

  // state
  const lang = useRouter().locale;
  const [filter, setFilter] = useState();
  const [sites, setSites] = useState(Sites);

  // functions
  const handleFilter = (f) => {
    let filt = { ...filter };
    filt[Object.keys(f)[0]] = f[Object.keys(f)[0]];
    setFilter(filt);

    return setSites(
      Sites.filter((x) => {
        if (filt.type && filt.type !== "") {
          return x.types.includes(filt.type);
        } else return true;
      }).filter((x) => {
        if (filt.periodOption && filt.periodOption !== "") {
          return FilterPeriodOptions[filt.periodOption].values.find(z => x.periods.includes(z));
        } else return true;
      })
    );
  };

  return (
    <Layout>
      <Head>
        <title>Patrimonia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Filter */}
      <SitesFilter cb={(x) => handleFilter(x)} filter={filter} FilterPeriodOptions={FilterPeriodOptions} lang={lang} />

      {/* Main */}
      {sites.map(site => <SitePill key={site.id} site={site} lang={lang} /> )}

    </Layout>
  );
};

export default Sites;
