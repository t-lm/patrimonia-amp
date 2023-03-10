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
       <lastmod>${new Date().toISOString().slice(0,10)}</lastmod>
       <changefreq>daily</changefreq>
       <xhtml:link rel="alternate" hreflang="en" href="https://www.patrimonia.app/en"/>
       <xhtml:link rel="alternate" hreflang="es" href="https://www.patrimonia.app/es"/>
       <xhtml:link rel="alternate" hreflang="de" href="https://www.patrimonia.app/de"/>
       <xhtml:link rel="alternate" hreflang="nl" href="https://www.patrimonia.app/nl"/>
     </url>
     <url>
       <loc>https://www.patrimonia.app/sites</loc>
       <lastmod>${new Date().toISOString().slice(0,10)}</lastmod>
       <changefreq>daily</changefreq>
       <xhtml:link rel="alternate" hreflang="en" href="https://www.patrimonia.app/en/sites"/>
       <xhtml:link rel="alternate" hreflang="es" href="https://www.patrimonia.app/es/sites"/>
       <xhtml:link rel="alternate" hreflang="de" href="https://www.patrimonia.app/de/sites"/>
       <xhtml:link rel="alternate" hreflang="nl" href="https://www.patrimonia.app/nl/sites"/>
     </url>
     ${sites
       .map((x) => {
         return `
       <url>
           <loc>${`${URL}/sites/${x.id}`}</loc>
           <lastmod>${x.updatedAt.slice(0,10)}</lastmod> 
           <changefreq>weekly</changefreq>
           <xhtml:link rel="alternate" hreflang="en" href="${`${URL}/en/sites/${x}`}"/>
           <xhtml:link rel="alternate" hreflang="es" href="${`${URL}/es/sites/${x}`}"/>
           <xhtml:link rel="alternate" hreflang="de" href="${`${URL}/de/sites/${x}`}"/>
           <xhtml:link rel="alternate" hreflang="nl" href="${`${URL}/nl/sites/${x}`}"/>
       </url>
     `;
       })
       .join("")}

      ${discos
        .map((x) => {
          return `
      <url>
          <loc>${`${URL}/discos/${x.id}`}</loc>
          <lastmod>${x.updatedAt.slice(0,10)}</lastmod> 
          <changefreq>monthly</changefreq>
          <xhtml:link rel="alternate" hreflang="en" href="${`${URL}/en/discos/${x}`}"/>
          <xhtml:link rel="alternate" hreflang="es" href="${`${URL}/es/discos/${x}`}"/>
          <xhtml:link rel="alternate" hreflang="de" href="${`${URL}/de/discos/${x}`}"/>
          <xhtml:link rel="alternate" hreflang="nl" href="${`${URL}/nl/discos/${x}`}"/>
      </url>
    `;
        })
        .join("")}

      ${organisers
        .map((x) => {
          return `
        <url>
            <loc>${`${URL}/organisers/${x.id}`}</loc>
            <lastmod>${x.updatedAt.slice(0,10)}</lastmod> 
            <changefreq>monthly</changefreq>
            <xhtml:link rel="alternate" hreflang="en" href="${`${URL}/en/organisers/${x}`}"/>
            <xhtml:link rel="alternate" hreflang="es" href="${`${URL}/es/organisers/${x}`}"/>
            <xhtml:link rel="alternate" hreflang="de" href="${`${URL}/de/organisers/${x}`}"/>
            <xhtml:link rel="alternate" hreflang="nl" href="${`${URL}/nl/organisers/${x}`}"/>
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
  const sites = req.data.listSites.items;

  const req1 = await API.graphql({
    query: listDiscos,
    variables: { filter: { dateEnd: { gt: today } } },
    authMode: "AWS_IAM",
  });
  const discos = req1.data.listDiscos.items;

  const req2 = await API.graphql({
    query: listOrganisers,
    authMode: "AWS_IAM",
  });
  const organisers = req2.data.listOrganisers.items;

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(sites, discos, organisers);

  //res.setHeader("Content-Type", "text/xml");
  res.setHeader("Content-Type", "application/xml")
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
