import { gql } from 'apollo-server';

export const rootType = gql`
  interface Node {
    id: ID!
  }

  type Query { _: Boolean }
  type Mutation { _: Boolean }
`;

export { articleType } from './article';
