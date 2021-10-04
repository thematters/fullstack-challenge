import { GraphQLResolveInfo } from 'graphql';
import {
  GQLArticle,
  GQLArticleTypeResolver,
  ArticleToIdResolver,
  ArticleToTitleResolver,
  ArticleToContentResolver,
  ArticleToCreatedTimestampResolver,
} from '../definitions/schemas';

const id: ArticleToIdResolver =
  async (parent: GQLArticle, args: {}, context: any, info: GraphQLResolveInfo) => {
    return parent.id as string;
  };
const title: ArticleToTitleResolver =
  async (parent: GQLArticle, args: {}, context: any, info: GraphQLResolveInfo) => {
    return parent.title as string;
  };
const content: ArticleToContentResolver =
  async (parent: GQLArticle, args: {}, context: any, info: GraphQLResolveInfo) => {
    return parent.content as string;
  };
const createdTimestamp: ArticleToCreatedTimestampResolver =
  async (parent: GQLArticle, args: {}, context: any, info: GraphQLResolveInfo) => {
    return parent.createdTimestamp as number;
  };

const resolver: GQLArticleTypeResolver = {
  id,
  title,
  content,
  createdTimestamp,
}

export default resolver;
