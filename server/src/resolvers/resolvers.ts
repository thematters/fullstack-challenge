import { v4 } from 'uuid';
import dbService from "../utils/database";

export const resolvers = {
  Query: {
    articles: async (_: any, args: any, context: any, info: any) => {
      return await dbService.getAllArticles();
    },
  },
  Mutation: {
    addArticle: async (_: any, args: any, context: any, info: any) => {
      const { title, content } = args;
      const _id = v4();
      const article = { _id, title, content };
      return await dbService.addArticle(article)
    },
  },
}