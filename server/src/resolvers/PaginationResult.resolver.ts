import { GraphQLResolveInfo } from 'graphql';
import {
  GQLArticle,
  GQLPaginationResult,
  GQLPaginationResultTypeResolver,
  PaginationResultToListResolver,
  PaginationResultToTotalResolver,
} from '../definitions/schemas';

const list: PaginationResultToListResolver =
  async (parent: GQLPaginationResult, args: {}, context: any, info: GraphQLResolveInfo) => {
    return parent.list as Array<GQLArticle>;
  };
const total: PaginationResultToTotalResolver =
  async (parent: GQLPaginationResult, args: {}, context: any, info: GraphQLResolveInfo) => {
    return parent.total as number;
  };

const resolver: GQLPaginationResultTypeResolver = {
  list,
  total,
}

export default resolver;
