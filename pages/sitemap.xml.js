// ./pages/sitemap.xml.js

import { API } from "aws-amplify";
import { listDiscos, listSites, listOrganisers } from "../src/graphql/queries";

const URL = "https://www.patrimonia.app";
const today = new Date().toISOString().slice(0, 10);

function generateSiteMap(sites, discos, organisers) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
     <url>
       <loc>https://www.patrimonia.app</loc>
       <xhtml:link
       rel="alternate"
       hreflang="en"
       href="https://www.patrimonia.app/en"/>
     </url>
     <url>
       <loc>https://www.patrimonia.app/sites</loc>
       <xhtml:link
       rel="alternate"
       hreflang="en"
       href="https://www.patrimonia.app/en/sites"/>
     </url>
     ${sites
       .map((x) => {
         return `
       <url>
           <loc>${`${URL}/sites/${x}`}</loc>
           <xhtml:link
           rel="alternate"
           hreflang="en"
           href="${`${URL}/en/sites/${x}`}"/>
       </url>
     `;
       })
       .join("")}

      ${discos
        .map((x) => {
          return `
      <url>
          <loc>${`${URL}/discos/${x}`}</loc>
          <xhtml:link
          rel="alternate"
          hreflang="en"
          href="${`${URL}/en/discos/${x}`}"/>
      </url>
    `;
        })
        .join("")}

      ${organisers
        .map((x) => {
          return `
        <url>
            <loc>${`${URL}/organisers/${x}`}</loc>
            <xhtml:link
            rel="alternate"
            hreflang="en"
            href="${`${URL}/en/organisers/${x}`}"/>
        </url>
      `;
        })
        .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site

  const req = await API.graphql({ query: listSites, authMode: "AWS_IAM" });
  const sites = req.data.listSites.items.map((x) => x.id);

  const req1 = await API.graphql({
    query: listDiscos,
    variables: { filter: { dateEnd: { gt: today } } },
    authMode: "AWS_IAM",
  });
  const discos = req1.data.listDiscos.items.map((x) => x.id);

  const req2 = await API.graphql({
    query: listOrganisers,
    authMode: "AWS_IAM",
  });
  const organisers = req2.data.listOrganisers.items.map((x) => x.id);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(sites, discos, organisers);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
