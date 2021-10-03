import { GraphQLResolveInfo } from 'graphql';
import {
  GQLArticle,
  GQLPaginationResult,
  GQLQueryTypeResolver,
  QueryToArticlesArgs,
  QueryToArticleArgs,
  QueryToArticlesResolver,
  QueryToArticleResolver,
} from '../definitions/schemas';
import MockArticles from '../mock/articles.json';
import MockArticle from '../mock/article.json';

const articles: QueryToArticlesResolver =
  (_, args: QueryToArticlesArgs, context: any, info: GraphQLResolveInfo) => {
    const listWithType = MockArticles.list.map(article => ({ ...article, __typename: 'Article' }))
    return {
      ...MockArticles,
      list: listWithType,
    } as GQLPaginationResult;
  };

const article: QueryToArticleResolver =
  (_, args: QueryToArticleArgs, context: any, info: GraphQLResolveInfo) => {
    return MockArticle as GQLArticle;
  };

const resolver: GQLQueryTypeResolver = {
  articles,
  article,
}

export default resolver;
