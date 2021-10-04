import ArticleDatabaseAPI from '../datasources/ArticleDatabaseAPI'

export interface ApolloContext {
  dataSources: {
    articleDatabaseAPI: ArticleDatabaseAPI
  }
}