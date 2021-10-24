export const resolvers = {
  Query: {
    getArticles: async (_: any, args: any, context: any, info: any) => {
      return context.models.Article.findAll();
    },
  },
  Mutation: {
    addArticle: async (_: any, args: any, context: any, info: any) => {
      const { title, content } = args;
      const article = { title, content };
      return context.models.Article.create(article)
    },
  },
}