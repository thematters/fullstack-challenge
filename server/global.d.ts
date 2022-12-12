declare module 'orbit-db-docstore' {
  class DocumentStore<T> {
    get(key: any): Promise<T>;
    set(key: any, data: any, options = {}): Promise<any>;
    put(key: any, data: any): Promise<any>;
    del(key: any, options = {}): Promise<any>;
    query(mapper: any, options = {}): Promise<any>;
    all: Record<any, any>;
  }
}
