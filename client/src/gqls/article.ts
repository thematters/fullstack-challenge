/* eslint-disable no-unused-vars */
import { useQuery, gql, useMutation } from '@apollo/client';

import {
  Article,
  ArticleConnection,
  AddArticleInput,
  Scalars,
} from '../../../server/src/types';

interface ArticleData {
  article: Article;
}

interface ArticlesData {
  articles: ArticleConnection;
}

interface AddArticleData {
  addArticle: Article;
}

interface AddArticleVars {
  input: AddArticleInput;
}

interface ArticleVars {
  id: Scalars['ID'];
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
  query ListArticles {
    articles {
      nodes {
        id
        title
        content
        createdAt
      }
      pageInfo {
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
    }
  }
`;

export const useArticle = (id: Scalars['ID']) => useQuery<ArticleData, ArticleVars>(ARTICLE, { variables: { id } });
export const useArticles = () => useQuery<ArticlesData>(ARTICLES, { fetchPolicy: 'no-cache' });
export const useAddArticle = () => useMutation<AddArticleData, AddArticleVars>(ADD_ARTICLE);
