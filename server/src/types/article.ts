import { gql } from 'apollo-server';

export const articleType = gql`
  type Article implements Node {
    id: ID!
    title: String!
    content: String
    createdAt: String
  }

  type PageInfo {
    hasNext: Boolean!
    total: Int
  }

  type ArticleConnection {
    nodes: [Article!]!
    pageInfo: PageInfo!
  }

  extend type Query {
    articles(
      first: Int
      after: String
    ): ArticleConnection!
    article(id: ID!): Article
  }

  input AddArticleInput {
    title: String!
    content: String
  }

  extend type Mutation {
    addArticle(input: AddArticleInput!): Article!
  }
`;

export default articleType;
