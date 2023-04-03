/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      username
      email
      role
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      username
      email
      role
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      username
      email
      role
      createdAt
      updatedAt
      owner
    }
  }
`;
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
      description_en
      description_es
      description_de
      description_nl
      discos {
        items {
          id
          locationID
          organiserID
          siteID
          audiences
          bookingRequired
          dateStart
          dateEnd
          duration
          description
          description_en
          description_es
          description_de
          description_nl
          demandCommentary
          demandCommentary_en
          demandCommentary_es
          demandCommentary_de
          demandCommentary_nl
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
          periods
          persons
          pictures
          practicalInfo
          practicalInfo_en
          practicalInfo_es
          practicalInfo_de
          practicalInfo_nl
          price
          priceCommentary
          priceCommentary_en
          priceCommentary_es
          priceCommentary_de
          priceCommentary_nl
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
      headline
      headline_en
      headline_es
      headline_de
      headline_nl
      links {
        text
        text_en
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
      opening
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
      description_en
      description_es
      description_de
      description_nl
      discos {
        items {
          id
          locationID
          organiserID
          siteID
          audiences
          bookingRequired
          dateStart
          dateEnd
          duration
          description
          description_en
          description_es
          description_de
          description_nl
          demandCommentary
          demandCommentary_en
          demandCommentary_es
          demandCommentary_de
          demandCommentary_nl
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
          periods
          persons
          pictures
          practicalInfo
          practicalInfo_en
          practicalInfo_es
          practicalInfo_de
          practicalInfo_nl
          price
          priceCommentary
          priceCommentary_en
          priceCommentary_es
          priceCommentary_de
          priceCommentary_nl
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
      headline
      headline_en
      headline_es
      headline_de
      headline_nl
      links {
        text
        text_en
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
      opening
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
      description_en
      description_es
      description_de
      description_nl
      discos {
        items {
          id
          locationID
          organiserID
          siteID
          audiences
          bookingRequired
          dateStart
          dateEnd
          duration
          description
          description_en
          description_es
          description_de
          description_nl
          demandCommentary
          demandCommentary_en
          demandCommentary_es
          demandCommentary_de
          demandCommentary_nl
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
          periods
          persons
          pictures
          practicalInfo
          practicalInfo_en
          practicalInfo_es
          practicalInfo_de
          practicalInfo_nl
          price
          priceCommentary
          priceCommentary_en
          priceCommentary_es
          priceCommentary_de
          priceCommentary_nl
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
      headline
      headline_en
      headline_es
      headline_de
      headline_nl
      links {
        text
        text_en
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
      opening
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
        discos {
          nextToken
        }
        headline
        headline_en
        headline_es
        headline_de
        headline_nl
        links {
          text
          text_en
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
        opening
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
      demandCommentary_es
      demandCommentary_de
      demandCommentary_nl
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
      practicalInfo_es
      practicalInfo_de
      practicalInfo_nl
      price
      priceCommentary
      priceCommentary_en
      priceCommentary_es
      priceCommentary_de
      priceCommentary_nl
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
        discos {
          nextToken
        }
        headline
        headline_en
        headline_es
        headline_de
        headline_nl
        links {
          text
          text_en
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
        opening
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
      demandCommentary_es
      demandCommentary_de
      demandCommentary_nl
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
      practicalInfo_es
      practicalInfo_de
      practicalInfo_nl
      price
      priceCommentary
      priceCommentary_en
      priceCommentary_es
      priceCommentary_de
      priceCommentary_nl
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
        discos {
          nextToken
        }
        headline
        headline_en
        headline_es
        headline_de
        headline_nl
        links {
          text
          text_en
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
        opening
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
      demandCommentary_es
      demandCommentary_de
      demandCommentary_nl
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
      practicalInfo_es
      practicalInfo_de
      practicalInfo_nl
      price
      priceCommentary
      priceCommentary_en
      priceCommentary_es
      priceCommentary_de
      priceCommentary_nl
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
export const onUpdateOrganiser = /* GraphQL */ `
  subscription OnUpdateOrganiser(
    $filter: ModelSubscriptionOrganiserFilterInput
    $owner: String
  ) {
    onUpdateOrganiser(filter: $filter, owner: $owner) {
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
export const onDeleteOrganiser = /* GraphQL */ `
  subscription OnDeleteOrganiser(
    $filter: ModelSubscriptionOrganiserFilterInput
    $owner: String
  ) {
    onDeleteOrganiser(filter: $filter, owner: $owner) {
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
export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest(
    $filter: ModelSubscriptionRequestFilterInput
    $owner: String
  ) {
    onCreateRequest(filter: $filter, owner: $owner) {
      id
      discoID
      organiserID
      email
      body
      created
      discoDate
      discoName
      locale
      name
      numberPersons
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
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest(
    $filter: ModelSubscriptionRequestFilterInput
    $owner: String
  ) {
    onUpdateRequest(filter: $filter, owner: $owner) {
      id
      discoID
      organiserID
      email
      body
      created
      discoDate
      discoName
      locale
      name
      numberPersons
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
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest(
    $filter: ModelSubscriptionRequestFilterInput
    $owner: String
  ) {
    onDeleteRequest(filter: $filter, owner: $owner) {
      id
      discoID
      organiserID
      email
      body
      created
      discoDate
      discoName
      locale
      name
      numberPersons
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
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
