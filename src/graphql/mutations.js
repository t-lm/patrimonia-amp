/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSite = /* GraphQL */ `
  mutation CreateSite(
    $input: CreateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    createSite(input: $input, condition: $condition) {
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
export const updateSite = /* GraphQL */ `
  mutation UpdateSite(
    $input: UpdateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    updateSite(input: $input, condition: $condition) {
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
export const deleteSite = /* GraphQL */ `
  mutation DeleteSite(
    $input: DeleteSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    deleteSite(input: $input, condition: $condition) {
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
export const createDisco = /* GraphQL */ `
  mutation CreateDisco(
    $input: CreateDiscoInput!
    $condition: ModelDiscoConditionInput
  ) {
    createDisco(input: $input, condition: $condition) {
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
export const updateDisco = /* GraphQL */ `
  mutation UpdateDisco(
    $input: UpdateDiscoInput!
    $condition: ModelDiscoConditionInput
  ) {
    updateDisco(input: $input, condition: $condition) {
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
export const deleteDisco = /* GraphQL */ `
  mutation DeleteDisco(
    $input: DeleteDiscoInput!
    $condition: ModelDiscoConditionInput
  ) {
    deleteDisco(input: $input, condition: $condition) {
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
export const updateOrganiser = /* GraphQL */ `
  mutation UpdateOrganiser(
    $input: UpdateOrganiserInput!
    $condition: ModelOrganiserConditionInput
  ) {
    updateOrganiser(input: $input, condition: $condition) {
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
export const deleteOrganiser = /* GraphQL */ `
  mutation DeleteOrganiser(
    $input: DeleteOrganiserInput!
    $condition: ModelOrganiserConditionInput
  ) {
    deleteOrganiser(input: $input, condition: $condition) {
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
