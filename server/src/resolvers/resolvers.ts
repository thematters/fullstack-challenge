import { v4 } from 'uuid';
import dbService from "../utils/database";

export const resolvers = {
  Query: {
    articles: async () => {
      return await dbService.getAllArticles();
    },
  },
  Mutation: {
    addArticle: async (_: any, args: any) => {
      const { title, content } = args;
      const _id = v4();
      const article = { _id, title, content };
      const newArticle = await dbService.addArticle(article)
      return newArticle
    },
  },
}