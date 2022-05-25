import * as IPFS from "ipfs"
import OrbitDB from "orbit-db"
import DocumentStore from 'orbit-db-docstore'

type Article = {
    _id: string;
    title: string,
    content: string,
}

class database {
    private db: OrbitDB
    private articleStore: DocumentStore<Article>

    startDB = async () => {
        try{
            const ipfs = await IPFS.create()
            this.db = await OrbitDB.createInstance(ipfs)
            this.articleStore = await this.db.docs("ArticleStore")
            await this.articleStore.load()  
            console.log('✅Connect database successfully');
        }catch(err){
            console.log("connectDb error", err);
        }
 
    }

    addArticle = async (article: Article) => {
        try {
            await this.articleStore.put(article)
            const newArticle = this.articleStore.get(article._id)
            return newArticle
        }catch(err){
            console.log("error in addArticle", err);
        }
        
    }

    getAllArticles = async () => {
        const articles = this.articleStore.all.map((article: any)  => article.payload.value)
        return articles
    }

    getArticleById = async (id: string) => {
        const article = this.articleStore.get(id)
        return article
    }

    
}

export default new database()