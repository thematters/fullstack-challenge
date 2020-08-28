/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListArticles
// ====================================================

export interface ListArticles_articles_nodes {
  __typename: "Article";
  id: string;
  title: string;
  content: string | null;
  createdAt: string | null;
}

export interface ListArticles_articles_pageInfo {
  __typename: "PageInfo";
  hasPrev: boolean;
  hasNext: boolean;
  total: number | null;
}

export interface ListArticles_articles {
  __typename: "ArticleConnection";
  nodes: ListArticles_articles_nodes[];
  pageInfo: ListArticles_articles_pageInfo;
}

export interface ListArticles {
  articles: ListArticles_articles;
}

export interface ListArticlesVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
