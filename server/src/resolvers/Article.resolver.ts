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
  (parent: GQLArticle, args: {}, context: any, info: GraphQLResolveInfo) => {
    return parent.id as number;
  };
const title: ArticleToTitleResolver =
  (parent: GQLArticle, args: {}, context: any, info: GraphQLResolveInfo) => {
    return parent.title as string;
  };
const content: ArticleToContentResolver =
  (parent: GQLArticle, args: {}, context: any, info: GraphQLResolveInfo) => {
    return parent.content as string;
  };
const createdTimestamp: ArticleToCreatedTimestampResolver =
  (parent: GQLArticle, args: {}, context: any, info: GraphQLResolveInfo) => {
    return parent.createdTimestamp as number;
  };

const resolver: GQLArticleTypeResolver = {
  id,
  title,
  content,
  createdTimestamp,
}

export default resolver;
