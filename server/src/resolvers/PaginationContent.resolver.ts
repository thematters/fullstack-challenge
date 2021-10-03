import { GraphQLResolveInfo } from 'graphql';
import {
  GQLPaginationContent,
  GQLPossiblePaginationContentTypeNames,
  GQLPaginationContentTypeResolver,
} from '../definitions/schemas';

const typeResolver: GQLPaginationContentTypeResolver =
  (parent, context: any, info: GraphQLResolveInfo) => {
    return parent.__typename;
  };

const resolver = {
  __resolveType: typeResolver
}

export default resolver;
