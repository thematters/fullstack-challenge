import { gql } from 'apollo-server';

export const articleType = gql`
    type Article {
      title: String
      content: String
    }

    extend type Query {
      articles: [Article]
    }
  `;

export default articleType;
