/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
      id
      name
      headline
      address {
        name
        street
        postalCode
        city
      }
      position {
        latitude
        longitude
      }
      types
      styles
      periods
      protections
      description
      links {
        fr
        en
        wwww
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSites = /* GraphQL */ `
  query ListSites(
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        headline
        address {
          name
          street
          postalCode
          city
        }
        position {
          latitude
          longitude
        }
        types
        styles
        periods
        protections
        description
        links {
          fr
          en
          wwww
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMedia = /* GraphQL */ `
  query GetMedia($id: ID!) {
    getMedia(id: $id) {
      id
      siteID
      description_fr
      description_en
      source
      copyright
      leading
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMedia = /* GraphQL */ `
  query ListMedia(
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedia(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        siteID
        description_fr
        description_en
        source
        copyright
        leading
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
