import { GraphQLResolveInfo } from 'graphql';
import {
  GQLArticle,
  MutationToCreateArticleArgs,
  MutationToUpdateArticleArgs,
  GQLMutationTypeResolver,
  MutationToCreateArticleResolver,
  MutationToUpdateArticleResolver,
} from '../definitions/schemas';
import MockArticle from '../mock/article.json';

const createArticle: MutationToCreateArticleResolver =
  (_, args: MutationToCreateArticleArgs, context: any, info: GraphQLResolveInfo) => {
    return MockArticle as GQLArticle;
  };

const updateArticle: MutationToUpdateArticleResolver =
  (_, args: MutationToUpdateArticleArgs, context: any, info: GraphQLResolveInfo) => {
    return MockArticle as GQLArticle;
  };

const resolver: GQLMutationTypeResolver = {
  createArticle,
  updateArticle,
}

export default resolver;
