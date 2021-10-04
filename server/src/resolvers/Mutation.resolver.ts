import { GraphQLResolveInfo } from 'graphql';
import {
  MutationToCreateArticleArgs,
  MutationToUpdateArticleArgs,
  GQLMutationTypeResolver,
  MutationToCreateArticleResolver,
  MutationToUpdateArticleResolver,
} from '../definitions/schemas';
import { ApolloContext } from '../definitions/context';

const createArticle: MutationToCreateArticleResolver =
  async (_, args: MutationToCreateArticleArgs, context: ApolloContext, info: GraphQLResolveInfo) => {
    return await context.dataSources.articleDatabaseAPI.create(args.data);
  };

const updateArticle: MutationToUpdateArticleResolver =
  async (_, args: MutationToUpdateArticleArgs, context: ApolloContext, info: GraphQLResolveInfo) => {
    return await context.dataSources.articleDatabaseAPI.update(args.id, args.data)
  };

const resolver: GQLMutationTypeResolver = {
  createArticle,
  updateArticle,
}

export default resolver;
