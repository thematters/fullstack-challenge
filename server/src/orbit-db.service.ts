import { OrbitDB } from 'orbit-db';
import { Inject, Injectable } from '@nestjs/common';

/**
 * @TODO
 * - define OrbitDB type
 */

export const OrbitDbToken = 'OrbitDbToken';

@Injectable()
export class DbService {
  @Inject(OrbitDbToken)
  private db: OrbitDB;

  createDocStore = async <T>(storeName: string): Promise<T> => {
    const store = await this.db.docstore<T>(storeName);

    return store;
  };
}
