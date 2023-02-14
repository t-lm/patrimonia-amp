/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
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
      description_en
      description_es
      description_de
      description_nl
      headline
      headline_en
      headline_es
      headline_de
      headline_nl
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
      name_en
      name_es
      name_de
      name_nl
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
export const listSites = /* GraphQL */ `
  query ListSites(
    $id: ID
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSites(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
        description_en
        description_es
        description_de
        description_nl
        headline
        headline_en
        headline_es
        headline_de
        headline_nl
        links {
          fr
          en
          www
        }
        media {
          nextToken
        }
        name
        name_en
        name_es
        name_de
        name_nl
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
      nextToken
    }
  }
`;
export const getDisco = /* GraphQL */ `
  query GetDisco($id: ID!) {
    getDisco(id: $id) {
      id
      locationID
      organiserID
      organiser {
        id
        name
        description
        description_en
        description_es
        description_de
        description_nl
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
        description_en
        description_es
        description_de
        description_nl
        headline
        headline_en
        headline_es
        headline_de
        headline_nl
        links {
          fr
          en
          www
        }
        media {
          nextToken
        }
        name
        name_en
        name_es
        name_de
        name_nl
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
      description_en
      description_es
      description_de
      description_nl
      demandCommentary
      demandCommentary_en
      events
      format
      headline
      headline_en
      headline_es
      headline_de
      headline_nl
      languages
      name
      name_en
      name_es
      name_de
      name_nl
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
      practicalInfo_en
      price
      priceCommentary
      priceCommentary_en
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
export const listDiscos = /* GraphQL */ `
  query ListDiscos(
    $filter: ModelDiscoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        locationID
        organiserID
        organiser {
          id
          name
          description
          description_en
          description_es
          description_de
          description_nl
          www
          phone
          email
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
          description
          description_en
          description_es
          description_de
          description_nl
          headline
          headline_en
          headline_es
          headline_de
          headline_nl
          name
          name_en
          name_es
          name_de
          name_nl
          periods
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
        description_en
        description_es
        description_de
        description_nl
        demandCommentary
        demandCommentary_en
        events
        format
        headline
        headline_en
        headline_es
        headline_de
        headline_nl
        languages
        name
        name_en
        name_es
        name_de
        name_nl
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
        practicalInfo_en
        price
        priceCommentary
        priceCommentary_en
        priority
        type
        subjects
        styles
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const discosByOrganiserID = /* GraphQL */ `
  query DiscosByOrganiserID(
    $organiserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDiscoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    discosByOrganiserID(
      organiserID: $organiserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        locationID
        organiserID
        organiser {
          id
          name
          description
          description_en
          description_es
          description_de
          description_nl
          www
          phone
          email
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
          description
          description_en
          description_es
          description_de
          description_nl
          headline
          headline_en
          headline_es
          headline_de
          headline_nl
          name
          name_en
          name_es
          name_de
          name_nl
          periods
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
        description_en
        description_es
        description_de
        description_nl
        demandCommentary
        demandCommentary_en
        events
        format
        headline
        headline_en
        headline_es
        headline_de
        headline_nl
        languages
        name
        name_en
        name_es
        name_de
        name_nl
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
        practicalInfo_en
        price
        priceCommentary
        priceCommentary_en
        priority
        type
        subjects
        styles
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const discosBySiteID = /* GraphQL */ `
  query DiscosBySiteID(
    $siteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDiscoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    discosBySiteID(
      siteID: $siteID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        locationID
        organiserID
        organiser {
          id
          name
          description
          description_en
          description_es
          description_de
          description_nl
          www
          phone
          email
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
          description
          description_en
          description_es
          description_de
          description_nl
          headline
          headline_en
          headline_es
          headline_de
          headline_nl
          name
          name_en
          name_es
          name_de
          name_nl
          periods
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
        description_en
        description_es
        description_de
        description_nl
        demandCommentary
        demandCommentary_en
        events
        format
        headline
        headline_en
        headline_es
        headline_de
        headline_nl
        languages
        name
        name_en
        name_es
        name_de
        name_nl
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
        practicalInfo_en
        price
        priceCommentary
        priceCommentary_en
        priority
        type
        subjects
        styles
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMedia = /* GraphQL */ `
  query ListMedia(
    $id: ID
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMedia(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const mediaBySiteID = /* GraphQL */ `
  query MediaBySiteID(
    $siteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mediaBySiteID(
      siteID: $siteID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getOrganiser = /* GraphQL */ `
  query GetOrganiser($id: ID!) {
    getOrganiser(id: $id) {
      id
      name
      description
      description_en
      description_es
      description_de
      description_nl
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
export const listOrganisers = /* GraphQL */ `
  query ListOrganisers(
    $id: ID
    $filter: ModelOrganiserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrganisers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        description
        description_en
        description_es
        description_de
        description_nl
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
      nextToken
    }
  }
`;
