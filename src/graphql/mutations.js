/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createSite = /* GraphQL */ `
  mutation CreateSite(
    $input: CreateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    createSite(input: $input, condition: $condition) {
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
export const updateSite = /* GraphQL */ `
  mutation UpdateSite(
    $input: UpdateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    updateSite(input: $input, condition: $condition) {
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
export const deleteSite = /* GraphQL */ `
  mutation DeleteSite(
    $input: DeleteSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    deleteSite(input: $input, condition: $condition) {
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
export const createDisco = /* GraphQL */ `
  mutation CreateDisco(
    $input: CreateDiscoInput!
    $condition: ModelDiscoConditionInput
  ) {
    createDisco(input: $input, condition: $condition) {
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
export const updateDisco = /* GraphQL */ `
  mutation UpdateDisco(
    $input: UpdateDiscoInput!
    $condition: ModelDiscoConditionInput
  ) {
    updateDisco(input: $input, condition: $condition) {
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
export const deleteDisco = /* GraphQL */ `
  mutation DeleteDisco(
    $input: DeleteDiscoInput!
    $condition: ModelDiscoConditionInput
  ) {
    deleteDisco(input: $input, condition: $condition) {
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
export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $input: CreateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    createMedia(input: $input, condition: $condition) {
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
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $input: UpdateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    updateMedia(input: $input, condition: $condition) {
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
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $input: DeleteMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    deleteMedia(input: $input, condition: $condition) {
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
export const createOrganiser = /* GraphQL */ `
  mutation CreateOrganiser(
    $input: CreateOrganiserInput!
    $condition: ModelOrganiserConditionInput
  ) {
    createOrganiser(input: $input, condition: $condition) {
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
export const updateOrganiser = /* GraphQL */ `
  mutation UpdateOrganiser(
    $input: UpdateOrganiserInput!
    $condition: ModelOrganiserConditionInput
  ) {
    updateOrganiser(input: $input, condition: $condition) {
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
export const deleteOrganiser = /* GraphQL */ `
  mutation DeleteOrganiser(
    $input: DeleteOrganiserInput!
    $condition: ModelOrganiserConditionInput
  ) {
    deleteOrganiser(input: $input, condition: $condition) {
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
export const createRequest = /* GraphQL */ `
  mutation CreateRequest(
    $input: CreateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    createRequest(input: $input, condition: $condition) {
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
export const updateRequest = /* GraphQL */ `
  mutation UpdateRequest(
    $input: UpdateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    updateRequest(input: $input, condition: $condition) {
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
export const deleteRequest = /* GraphQL */ `
  mutation DeleteRequest(
    $input: DeleteRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    deleteRequest(input: $input, condition: $condition) {
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
