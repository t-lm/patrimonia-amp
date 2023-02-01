/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite(
    $filter: ModelSubscriptionSiteFilterInput
    $owner: String
  ) {
    onCreateSite(filter: $filter, owner: $owner) {
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
        www
      }
      pictureID
      picture {
        id
        siteID
        description_fr
        description_en
        source
        copyright
        createdAt
        updatedAt
        owner
      }
      media {
        items {
          id
          siteID
          description_fr
          description_en
          source
          copyright
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSite = /* GraphQL */ `
  subscription OnUpdateSite(
    $filter: ModelSubscriptionSiteFilterInput
    $owner: String
  ) {
    onUpdateSite(filter: $filter, owner: $owner) {
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
        www
      }
      pictureID
      picture {
        id
        siteID
        description_fr
        description_en
        source
        copyright
        createdAt
        updatedAt
        owner
      }
      media {
        items {
          id
          siteID
          description_fr
          description_en
          source
          copyright
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSite = /* GraphQL */ `
  subscription OnDeleteSite(
    $filter: ModelSubscriptionSiteFilterInput
    $owner: String
  ) {
    onDeleteSite(filter: $filter, owner: $owner) {
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
        www
      }
      pictureID
      picture {
        id
        siteID
        description_fr
        description_en
        source
        copyright
        createdAt
        updatedAt
        owner
      }
      media {
        items {
          id
          siteID
          description_fr
          description_en
          source
          copyright
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia(
    $filter: ModelSubscriptionMediaFilterInput
    $owner: String
  ) {
    onCreateMedia(filter: $filter, owner: $owner) {
      id
      siteID
      description_fr
      description_en
      source
      copyright
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia(
    $filter: ModelSubscriptionMediaFilterInput
    $owner: String
  ) {
    onUpdateMedia(filter: $filter, owner: $owner) {
      id
      siteID
      description_fr
      description_en
      source
      copyright
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia(
    $filter: ModelSubscriptionMediaFilterInput
    $owner: String
  ) {
    onDeleteMedia(filter: $filter, owner: $owner) {
      id
      siteID
      description_fr
      description_en
      source
      copyright
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateDisco = /* GraphQL */ `
  subscription OnCreateDisco(
    $filter: ModelSubscriptionDiscoFilterInput
    $owner: String
  ) {
    onCreateDisco(filter: $filter, owner: $owner) {
      id
      name
      headline
      dateStart
      dateEnd
      pictures
      organiserID
      duration
      subjects
      languages
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateDisco = /* GraphQL */ `
  subscription OnUpdateDisco(
    $filter: ModelSubscriptionDiscoFilterInput
    $owner: String
  ) {
    onUpdateDisco(filter: $filter, owner: $owner) {
      id
      name
      headline
      dateStart
      dateEnd
      pictures
      organiserID
      duration
      subjects
      languages
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteDisco = /* GraphQL */ `
  subscription OnDeleteDisco(
    $filter: ModelSubscriptionDiscoFilterInput
    $owner: String
  ) {
    onDeleteDisco(filter: $filter, owner: $owner) {
      id
      name
      headline
      dateStart
      dateEnd
      pictures
      organiserID
      duration
      subjects
      languages
      createdAt
      updatedAt
      owner
    }
  }
`;
