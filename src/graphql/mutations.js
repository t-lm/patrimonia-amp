/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const updateOrganiser = /* GraphQL */ `
  mutation UpdateOrganiser(
    $input: UpdateOrganiserInput!
    $condition: ModelOrganiserConditionInput
  ) {
    updateOrganiser(input: $input, condition: $condition) {
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
export const deleteOrganiser = /* GraphQL */ `
  mutation DeleteOrganiser(
    $input: DeleteOrganiserInput!
    $condition: ModelOrganiserConditionInput
  ) {
    deleteOrganiser(input: $input, condition: $condition) {
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
