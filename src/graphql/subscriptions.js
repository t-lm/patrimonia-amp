/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite(
    $filter: ModelSubscriptionSiteFilterInput
    $owner: String
  ) {
    onCreateSite(filter: $filter, owner: $owner) {
      id
      ambassadorID
      locationID
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
      address {
        name
        street
        postalCode
        city
      }
      description
      description_enGB
      headline
      headline_enGB
      links {
        fr
        en
        www
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
      name
      name_enGB {
        name
        street
        postalCode
        city
      }
      periods
      position {
        latitude
        longitude
      }
      protections
      styles
      types
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
      ambassadorID
      locationID
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
      address {
        name
        street
        postalCode
        city
      }
      description
      description_enGB
      headline
      headline_enGB
      links {
        fr
        en
        www
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
      name
      name_enGB {
        name
        street
        postalCode
        city
      }
      periods
      position {
        latitude
        longitude
      }
      protections
      styles
      types
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
      ambassadorID
      locationID
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
      address {
        name
        street
        postalCode
        city
      }
      description
      description_enGB
      headline
      headline_enGB
      links {
        fr
        en
        www
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
      name
      name_enGB {
        name
        street
        postalCode
        city
      }
      periods
      position {
        latitude
        longitude
      }
      protections
      styles
      types
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
      locationID
      organiserID
      organiser {
        id
        name
        description
        description_enGB
        www
        phone
        email
        address {
          name
          street
          postalCode
          city
        }
        type
        createdAt
        updatedAt
        owner
      }
      siteID
      site {
        id
        ambassadorID
        locationID
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
        address {
          name
          street
          postalCode
          city
        }
        description
        description_enGB
        headline
        headline_enGB
        links {
          fr
          en
          www
        }
        media {
          nextToken
        }
        name
        name_enGB {
          name
          street
          postalCode
          city
        }
        periods
        position {
          latitude
          longitude
        }
        protections
        styles
        types
        createdAt
        updatedAt
        owner
      }
      address {
        name
        street
        postalCode
        city
      }
      audiences
      bookingRequired
      dateStart
      dateEnd
      dates {
        start
        end
      }
      duration
      description
      description_enGB
      demandCommentary
      demandCommentary_enGB
      events
      format
      headline
      headline_enGB
      languages
      name
      name_enGB
      openingHours {
        sun
        mon
        tue
        wed
        thu
        fri
        sat
      }
      periods
      persons
      pictures
      practicalInfo
      practicalInfo_enGB
      price
      priceCommentary
      priceCommentary_enGB
      priority
      type
      subjects
      styles
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
      locationID
      organiserID
      organiser {
        id
        name
        description
        description_enGB
        www
        phone
        email
        address {
          name
          street
          postalCode
          city
        }
        type
        createdAt
        updatedAt
        owner
      }
      siteID
      site {
        id
        ambassadorID
        locationID
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
        address {
          name
          street
          postalCode
          city
        }
        description
        description_enGB
        headline
        headline_enGB
        links {
          fr
          en
          www
        }
        media {
          nextToken
        }
        name
        name_enGB {
          name
          street
          postalCode
          city
        }
        periods
        position {
          latitude
          longitude
        }
        protections
        styles
        types
        createdAt
        updatedAt
        owner
      }
      address {
        name
        street
        postalCode
        city
      }
      audiences
      bookingRequired
      dateStart
      dateEnd
      dates {
        start
        end
      }
      duration
      description
      description_enGB
      demandCommentary
      demandCommentary_enGB
      events
      format
      headline
      headline_enGB
      languages
      name
      name_enGB
      openingHours {
        sun
        mon
        tue
        wed
        thu
        fri
        sat
      }
      periods
      persons
      pictures
      practicalInfo
      practicalInfo_enGB
      price
      priceCommentary
      priceCommentary_enGB
      priority
      type
      subjects
      styles
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
      locationID
      organiserID
      organiser {
        id
        name
        description
        description_enGB
        www
        phone
        email
        address {
          name
          street
          postalCode
          city
        }
        type
        createdAt
        updatedAt
        owner
      }
      siteID
      site {
        id
        ambassadorID
        locationID
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
        address {
          name
          street
          postalCode
          city
        }
        description
        description_enGB
        headline
        headline_enGB
        links {
          fr
          en
          www
        }
        media {
          nextToken
        }
        name
        name_enGB {
          name
          street
          postalCode
          city
        }
        periods
        position {
          latitude
          longitude
        }
        protections
        styles
        types
        createdAt
        updatedAt
        owner
      }
      address {
        name
        street
        postalCode
        city
      }
      audiences
      bookingRequired
      dateStart
      dateEnd
      dates {
        start
        end
      }
      duration
      description
      description_enGB
      demandCommentary
      demandCommentary_enGB
      events
      format
      headline
      headline_enGB
      languages
      name
      name_enGB
      openingHours {
        sun
        mon
        tue
        wed
        thu
        fri
        sat
      }
      periods
      persons
      pictures
      practicalInfo
      practicalInfo_enGB
      price
      priceCommentary
      priceCommentary_enGB
      priority
      type
      subjects
      styles
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
export const onCreateOrganiser = /* GraphQL */ `
  subscription OnCreateOrganiser(
    $filter: ModelSubscriptionOrganiserFilterInput
    $owner: String
  ) {
    onCreateOrganiser(filter: $filter, owner: $owner) {
      id
      name
      description
      description_enGB
      www
      phone
      email
      address {
        name
        street
        postalCode
        city
      }
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateOrganiser = /* GraphQL */ `
  subscription OnUpdateOrganiser(
    $filter: ModelSubscriptionOrganiserFilterInput
    $owner: String
  ) {
    onUpdateOrganiser(filter: $filter, owner: $owner) {
      id
      name
      description
      description_enGB
      www
      phone
      email
      address {
        name
        street
        postalCode
        city
      }
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteOrganiser = /* GraphQL */ `
  subscription OnDeleteOrganiser(
    $filter: ModelSubscriptionOrganiserFilterInput
    $owner: String
  ) {
    onDeleteOrganiser(filter: $filter, owner: $owner) {
      id
      name
      description
      description_enGB
      www
      phone
      email
      address {
        name
        street
        postalCode
        city
      }
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
