/* eslint-disable no-unused-vars */
import { useQuery, gql, useMutation } from '@apollo/client';

import {
  Article,
  QueryArticleArgs,
  QueryArticlesArgs,
  ArticleConnection,
  MutationAddArticleArgs,
} from '../../../../server/src/types';

interface ArticleData {
  article: Article;
}

interface ArticlesData {
  articles: ArticleConnection;
}

interface AddArticleData {
  addArticle: Article;
}

const ARTICLE = gql`
  query getArticle($id: ID!) {
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
  variables: QueryArticleArgs,
) => useQuery<ArticleData, QueryArticleArgs>(ARTICLE, { variables });

export const useArticles = (
  variables?: QueryArticlesArgs,
) => useQuery<ArticlesData, QueryArticlesArgs>(ARTICLES, { variables, fetchPolicy: 'no-cache' });

export const useAddArticle = () => useMutation<AddArticleData, MutationAddArticleArgs>(ADD_ARTICLE);
