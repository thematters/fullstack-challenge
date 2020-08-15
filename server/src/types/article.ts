import { gql } from 'apollo-server';

export const articleType = gql`
    type Article implements Node {
      id: ID!
      title: String!
      content: String
      createdAt: String
    }

    extend type Query {
      articles: [Article]
    }

    input AddArticleInput {
      title: String!
      content: String
    }

    extend type Mutation {
      addArticle(input: AddArticleInput!): Article
    }
  `;

export default articleType;
