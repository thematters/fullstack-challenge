import gql from "graphql-tag";

export const GET_ARTICLES = gql`
query articles($limit: Int, $offset: Int) {
  articles (limit: $limit, offset: $offset) {
    _id
	  title
    content
  }
}
`;

export const GET_ARTICLE_BY_ID = gql`
query article($_id: String!) {
  article (_id: $_id) {
    _id
    title
    content
  }
}
`;


export const ADD_ARTICLE = gql`
  mutation addArticle($title: String!, $content: String!) {
    addArticle(title: $title, content: $content) {
      _id
      title
      content
    }
  }
`;

export const GET_ARTICLES_COUNT = gql`
query articlesCount {
  articlesCount
}
`;
