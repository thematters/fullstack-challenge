import { OrbitDB } from 'orbit-db';
import { Inject, Injectable } from '@nestjs/common';

/**
 * @TODO
 * - define OrbitDB type
 */

export const OrbitDbToken = 'OrbitDbToken';

interface CreateDocStoreInput {
  storeName: string;
  indexBy?: string;
}

@Injectable()
export class DbService {
  @Inject(OrbitDbToken)
  private db: OrbitDB;

  createDocStore = async <T>(input: CreateDocStoreInput): Promise<T> => {
    const store = await this.db.docstore<T>(input.storeName);

    return store;
  };
}
