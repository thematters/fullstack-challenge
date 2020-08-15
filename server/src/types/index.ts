import { gql } from 'apollo-server';

export const rootType = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query { _: Boolean }
  type Mutation { _: Boolean }
`;

export { articleType } from './article';
