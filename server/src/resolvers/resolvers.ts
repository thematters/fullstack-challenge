//resolvers 是用來告訴 Apol
import console, { Console } from 'console';
import { v4 } from 'uuid';
import dbService from '../service/dbService';

export const resolvers = {
    Query: {
        articles: async (_: any, {limit, offset}: { limit: number, offset: number }) => {
            const articles = await dbService.getAllArticles();
            return articles.slice(offset, limit + offset);
        },
        article: async (_: any, {_id}: { _id: string }) => {
            const article = await dbService.getArticleById(_id);
            return article;
        },
        articlesCount: async() => {
            const articles = await dbService.getAllArticles();
            const articlesCount = articles.length;
            return articlesCount;
        }
    },
    Mutation: {
        addArticle: async (_: any, args: any) => {
            const { title, content } = args;
            const article = {
                _id: v4(),
                title,
                content,
            };
            try {
                const newArticle = await dbService.addArticle(article)                
                return newArticle
                
            }catch(err){
                console.log("error in resolver", err);
            }

        }
        }
    }
