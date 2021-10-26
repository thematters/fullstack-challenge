import IPFS from "ipfs"
import OrbitDB from "orbit-db"
import DocStore from "orbit-db-docstore";

type Article = {
  _id: String;
  title: String
  content: String
}

class database {
  private db: OrbitDB
  private articleStore: DocStore<Article>

  startDB = async () => {
    const ipfs = await IPFS.create()
    this.db = await OrbitDB.createInstance(ipfs)
    this.articleStore = await this.db.docstore("ArticleStore")
    await this.articleStore.load()
  }

  getAllArticles = async () => {
    return this.articleStore.all.map(article => article.payload.value)
  }

  addArticle = async (article: Article) => {
    try {
      await this.articleStore.put(article)
      const newArticle = this.articleStore.get(article._id)
      return newArticle
    } catch (err: any) {
      console.log(err.message)
    }
  }
}

export default new database()