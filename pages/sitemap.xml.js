// ./pages/sitemap.xml.js

import { API } from "aws-amplify";
import { listDiscos, listSites, listOrganisers } from "../src/graphql/queries";

const URL = "https://www.patrimonia.app";
const today = new Date().toISOString().slice(0, 10);

function generateSiteMap(sites, discos, organisers) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://www.patrimonia.app</loc>
     </url>
     <url>
       <loc>https://www.patrimonia.app/sites</loc>
     </url>
     ${sites
       .map((x) => {
         return `
       <url>
           <loc>${`${URL}/sites/${x}`}</loc>
       </url>
     `;
       })
       .join("")}

      ${discos
        .map((x) => {
          return `
      <url>
          <loc>${`${URL}/discos/${x}`}</loc>
      </url>
    `;
        })
        .join("")}

      ${organisers
        .map((x) => {
          return `
        <url>
            <loc>${`${URL}/organisers/${x}`}</loc>
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
