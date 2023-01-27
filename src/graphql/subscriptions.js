/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
      id
      title
      content
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
      name
      headline
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
      name
      headline
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
      name
      headline
      types
      createdAt
      updatedAt
      owner
    }
  }
`;
