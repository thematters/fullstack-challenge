/* eslint-disable no-unused-vars */
import { useQuery, gql, useMutation } from '@apollo/client';

import { GetArticle, GetArticleVariables } from './__generated__/getArticle';
import { ListArticles, ListArticlesVariables } from './__generated__/ListArticles';
import { AddArticle, AddArticleVariables } from './__generated__/AddArticle';

const ARTICLE = gql`
  query GetArticle($id: ID!) {
    article(id: $id) {
      id
      title
      content
      createdAt
    }
  }
`;

const ARTICLES = gql`
  query ListArticles(
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    articles(
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      nodes {
        id
        title
        content
        createdAt
      }
      pageInfo {
        hasPrev
        hasNext
        total
      }
    }
  }
`;

const ADD_ARTICLE = gql`
  mutation AddArticle($input: AddArticleInput!) {
    addArticle(input: $input) {
      id
      title
      content
      createdAt
    }
  }
`;

export const useArticle = (
  variables: GetArticleVariables,
) => useQuery<GetArticle, GetArticleVariables>(ARTICLE, { variables });

export const useArticles = (
  variables?: ListArticlesVariables,
) => useQuery<ListArticles, ListArticlesVariables>(ARTICLES, { variables, fetchPolicy: 'no-cache' });

export const useAddArticle = () => useMutation<AddArticle, AddArticleVariables>(ADD_ARTICLE);
