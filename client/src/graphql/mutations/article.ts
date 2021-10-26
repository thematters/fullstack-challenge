import gql from "graphql-tag";

export const GET_ARTICLE_QUERY = gql`
query articles {
  articles {
    _id
		title
    content
  }
}
`;

export const ADD_ARTICLE_MUTATION = gql`
  mutation addArticle($title: String!, $content: String!) {
    addArticle(title: $title, content: $content) {
      _id
      title
      content
    }
  }
`;
