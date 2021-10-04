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
import { ApolloContext } from '../definitions/context';

const articles: QueryToArticlesResolver =
  async (_, args: QueryToArticlesArgs, context: ApolloContext, info: GraphQLResolveInfo) => {
    const [ articles, total ] = await context.dataSources.articleDatabaseAPI.getArticles(args.pagination)
    return {
      list: articles.map(article =>
        ({ ...article, __typename: 'Article' })
      ),
      total
    };
  };

const article: QueryToArticleResolver =
  async (_, args: QueryToArticleArgs, context: ApolloContext, info: GraphQLResolveInfo) => {
    return context.dataSources.articleDatabaseAPI.getArticle(args.id)
  };

const resolver: GQLQueryTypeResolver = {
  articles,
  article,
}

export default resolver;
