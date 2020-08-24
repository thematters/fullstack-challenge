/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddArticleInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddArticle
// ====================================================

export interface AddArticle_addArticle {
  __typename: "Article";
  id: string;
  title: string;
  content: string | null;
  createdAt: string | null;
}

export interface AddArticle {
  addArticle: AddArticle_addArticle;
}

export interface AddArticleVariables {
  input: AddArticleInput;
}
