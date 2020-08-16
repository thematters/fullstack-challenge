import { useQuery, gql, useMutation } from '@apollo/client';

// eslint-disable-next-line no-unused-vars
import { Article, AddArticleInput } from '../../../server/src/types';

interface ArticlesData {
  articles: Article[];
}

interface AddArticleData {
  addArticle: Article;
}

interface AddArticleVars {
  input: AddArticleInput;
}

const ARTICLES = gql`
  query ListArticles {
    articles {
      id
      title
      content
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

export const useArticles = () => useQuery<ArticlesData>(ARTICLES, { fetchPolicy: 'no-cache' });
export const useAddArticle = () => useMutation<AddArticleData, AddArticleVars>(ADD_ARTICLE);
