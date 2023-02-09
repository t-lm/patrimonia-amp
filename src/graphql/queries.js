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
          nextToken
        }
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
      name
      headline
      organiserID
      organiser {
        id
        name
        description_fr
        description_en
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
      type
      format
      format2
      demandCommentary
      practicalInfo
      bookingRequired
      dateStart
      dateEnd
      dates {
        start
        end
      }
      openingHours {
        sun
        mon
        tue
        wed
        thu
        fri
        sat
      }
      pictures
      duration
      price
      priceCommentary
      subjects
      languages
      audiences
      styles
      periods
      events
      persons
      address {
        name
        street
        postalCode
        city
      }
      siteID
      site {
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
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      priority
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
        name
        headline
        organiserID
        organiser {
          id
          name
          description_fr
          description_en
          www
          phone
          email
          type
          createdAt
          updatedAt
          owner
        }
        type
        format
        format2
        demandCommentary
        practicalInfo
        bookingRequired
        dateStart
        dateEnd
        dates {
          start
          end
        }
        openingHours {
          sun
          mon
          tue
          wed
          thu
          fri
          sat
        }
        pictures
        duration
        price
        priceCommentary
        subjects
        languages
        audiences
        styles
        periods
        events
        persons
        address {
          name
          street
          postalCode
          city
        }
        siteID
        site {
          id
          name
          headline
          types
          styles
          periods
          protections
          description
          pictureID
          createdAt
          updatedAt
          owner
        }
        priority
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const discoByDateStartAndEnd = /* GraphQL */ `
  query DiscoByDateStartAndEnd(
    $dateStart: String!
    $dateEnd: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDiscoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    discoByDateStartAndEnd(
      dateStart: $dateStart
      dateEnd: $dateEnd
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        headline
        organiserID
        organiser {
          id
          name
          description_fr
          description_en
          www
          phone
          email
          type
          createdAt
          updatedAt
          owner
        }
        type
        format
        format2
        demandCommentary
        practicalInfo
        bookingRequired
        dateStart
        dateEnd
        dates {
          start
          end
        }
        openingHours {
          sun
          mon
          tue
          wed
          thu
          fri
          sat
        }
        pictures
        duration
        price
        priceCommentary
        subjects
        languages
        audiences
        styles
        periods
        events
        persons
        address {
          name
          street
          postalCode
          city
        }
        siteID
        site {
          id
          name
          headline
          types
          styles
          periods
          protections
          description
          pictureID
          createdAt
          updatedAt
          owner
        }
        priority
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const discoByDateEndAndStart = /* GraphQL */ `
  query DiscoByDateEndAndStart(
    $dateEnd: String!
    $dateStart: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDiscoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    discoByDateEndAndStart(
      dateEnd: $dateEnd
      dateStart: $dateStart
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        headline
        organiserID
        organiser {
          id
          name
          description_fr
          description_en
          www
          phone
          email
          type
          createdAt
          updatedAt
          owner
        }
        type
        format
        format2
        demandCommentary
        practicalInfo
        bookingRequired
        dateStart
        dateEnd
        dates {
          start
          end
        }
        openingHours {
          sun
          mon
          tue
          wed
          thu
          fri
          sat
        }
        pictures
        duration
        price
        priceCommentary
        subjects
        languages
        audiences
        styles
        periods
        events
        persons
        address {
          name
          street
          postalCode
          city
        }
        siteID
        site {
          id
          name
          headline
          types
          styles
          periods
          protections
          description
          pictureID
          createdAt
          updatedAt
          owner
        }
        priority
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
      description_fr
      description_en
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
        description_fr
        description_en
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
