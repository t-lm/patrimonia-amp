// ./lib/sites.js

import fs from "fs";
import path from "path";

import { API } from '@aws-amplify/api'
import config from '../src/aws-exports'
import { listSites } from '../src/graphql/queries'

// after your imports
API.configure(config)

// later down in your code
export async function list() {
   const response = await API.graphql({
      query: listSites,
      authMode: 'AWS_IAM'
   })
console.log(response)
}


const DescriptionsDir = path.join(process.cwd(), "descriptions/sites");
const MediaDir = path.join(process.cwd(), "media");
const GuidesDir = path.join(process.cwd(), "guides");
const SitesDir = path.join(process.cwd(), "sites");
const VisitsDir = path.join(process.cwd(), "visits");

/* i would love to validate type in these functions */

export async function getSite(id) {
  const fullPath = path.join(SitesDir, `${id}.json`);
  const content = fs.readFileSync(fullPath, "utf8");
  const result = JSON.parse(content);

  return {
    id,
    ...result,
  };
}

export function listSites() {
  const fileNames = fs.readdirSync(SitesDir);
  const allSites = fileNames.map((fileName) => {
    const id = fileName.replace(/\.json$/, "");
    const fullPath = path.join(SitesDir, fileName);
    const content = fs.readFileSync(fullPath, "utf8");
    const result = JSON.parse(content);

    return { id, ...result };
  });

  return allSites;
}

export function listSiteIds() {
  const fileNames = fs.readdirSync(SitesDir);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ""),
      },
    };
  });
}

export async function getVisits(siteID) {
  const now = new Date();
  const startPeriod = now.setDate(now.getDate() - 1);
  const endPeriod = now.setMonth(now.getMonth() + 6);

  const fileNames = fs.readdirSync(VisitsDir);
  const allVisits = [];

  fileNames.forEach((fileName) => {
    let id = fileName.replace(/\.json$/, "");
    let fullPath = path.join(VisitsDir, fileName);
    let content = fs.readFileSync(fullPath, "utf8");
    let result = JSON.parse(content);

    if (result.sites.includes(siteID)) allVisits.push({ id, ...result });
  });
  let visits = allVisits.filter((x) => {
    if (new Date(x.dateStart) < endPeriod && new Date(x.dateEnd) > startPeriod)
      return true;
    else return false;
  });

  visits.sort((a, b) =>
    new Date(a.dateStart) > new Date(b.dateStart) ? 1 : -1
  );

  return visits;
}

/* returns medias for a given site */
export async function getMedia(siteID) {
  const file = fs.readFileSync(path.join(MediaDir, `db.json`), "utf8");
  const db = JSON.parse(file);

  const media = db.filter((x) => x.siteID === siteID);
  return media;
}

export async function getSources(sourcesID) {
  const file = fs.readFileSync(path.join(GuidesDir, `db.json`), "utf8");
  const db = JSON.parse(file);

  const sources = db.filter((x) => sourcesID && sourcesID.includes(x.id));
  return sources;
}
