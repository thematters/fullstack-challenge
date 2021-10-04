import * as IPFS from "ipfs";
import OrbitDB from "orbit-db";
import { DataSource } from "apollo-datasource";
import FeedStore from "orbit-db-feedstore";
import KeyValueStore from "orbit-db-kvstore";
import CounterStore from "orbit-db-counterstore";
import { GQLArticle, GQLArticleInput, GQLPaginationInput } from "../definitions/schemas";

interface ArticleDatabase {
  store: KeyValueStore<[GQLArticle, Array<string>]>;
  createdFeedLog: FeedStore<GQLArticleInput>;
  updatedFeedLog: FeedStore<[string, GQLArticleInput]>;
}

export async function initialArticleDatabase<
  GQLArticle
>(): Promise<ArticleDatabase> {
  let ipfs: any;
  let orbitdb: OrbitDB | undefined;
  try {
    ipfs = await IPFS.create({ repo: "./ipfs" })
    orbitdb = await OrbitDB.createInstance(ipfs);
    // Create OrbitDB databases
    const [store, createdFeedLog, updatedFeedLog] = await Promise.all([
      (async () => {
        const storage = await orbitdb.keyvalue<GQLArticle>("articles.store");
        await storage.load();
        return storage;
      })(),
      (async () => {
        const storage = await orbitdb.feed<string>("articles.createdFeedLog");
        await storage.load();
        return storage;
      })(),
      (async () => {
        const storage = await orbitdb.feed<string>("articles.updatedFeedLog");
        await storage.load();
        return storage;
      })()
    ]);

    process.on("SIGINT", (() => {
      let isClosing = false
      return async () => {
        if (isClosing) return;
        isClosing = true
        await Promise.all([
          store.close(),
          createdFeedLog.close(),
          updatedFeedLog.close(),
        ]);
        if (orbitdb !== undefined) await orbitdb.disconnect();
        if (ipfs !== undefined) await ipfs.stop()
        process.exit(0);
      }
    })());

    return <ArticleDatabase>(<unknown>{
      store,
      createdFeedLog,
      updatedFeedLog,
    });
  } catch (e) {
    if (orbitdb !== undefined) {
      await orbitdb.disconnect();
    }
    throw e;
  }
}

export default class ArticleDatabaseAPI extends DataSource {
  database: ArticleDatabase;
  context: any;
  constructor(database: ArticleDatabase) {
    super();
    this.database = database;
  }

  initialize(config: { context: any }) {
    this.context = config.context;
  }

  async create(source: GQLArticleInput): Promise<GQLArticle> {
    let hash;
    try {
      hash = await this.database.createdFeedLog.add(source);
      const result = {
        id: hash,
        createdTimestamp: Date.now(),
        ...source,
      };
      await this.database.store.put(hash, [result, [hash]]);
      return result;
    } catch (e) {
      if (hash !== undefined) {
        await Promise.all([
          this.database.store.del(hash),
          this.database.createdFeedLog.remove(hash),
        ]);
      }

      throw e;
    }
  }

  async update(id: string, source: GQLArticleInput): Promise<GQLArticle> {
    let updateHash;
    try {
      updateHash = await this.database.updatedFeedLog.add([id, source]);
      const [oldValue, relatedHashArray] = await this.database.store.get(id);
      const newValue = { ...oldValue, ...source };
      await this.database.store.set(id, [
        newValue,
        [...relatedHashArray, updateHash],
      ]);
      return newValue;
    } catch (e) {
      if (updateHash !== undefined) {
        await this.database.updatedFeedLog.remove(updateHash);
      }

      throw e;
    }
  }

  getArticle(id: string): GQLArticle {
    const [article] = this.database.store.get(id);
    return article;
  }

  getArticles(args: GQLPaginationInput): [Array<GQLArticle>, number] {
    let offset;
    let selector;
    if (args.afterHash) {
      offset = 0
      selector = {
        reverse: true,
        lt: args.afterHash,
        limit: args.pageSize
      }
    } else if (args.beforeHash) {
      offset = 0
      selector = {
        reverse: true,
        gt: args.beforeHash,
        limit: args.pageSize
      }
    } else {
      offset = (args.page - 1) * args.pageSize
      selector = {
        reverse: true,
        limit: args.pageSize + offset
      }
    }
    const articles = this.database.createdFeedLog
      .iterator(selector)
      .collect()
      .slice(offset)
      .map(item => this.database.store.get(item.hash)[0])
      
    return [articles, this.database.createdFeedLog.all.length];
  }
}
