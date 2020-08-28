/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getArticle
// ====================================================

export interface GetArticle_article {
  __typename: "Article";
  id: string;
  title: string;
  content: string | null;
  createdAt: string | null;
}

export interface GetArticle {
  article: GetArticle_article | null;
}

export interface GetArticleVariables {
  id: string;
}
