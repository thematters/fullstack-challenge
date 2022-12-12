import { Global, Module } from '@nestjs/common';
import { DbService, OrbitDbToken } from './orbit-db.service';
import OrbitDb from 'orbit-db';
import * as IPFSGateway from 'ipfs';

@Global()
@Module({
  providers: [
    {
      provide: OrbitDbToken,
      useFactory: async () => {
        const ipfs = await IPFSGateway.create();
        const db = await OrbitDb.createInstance(ipfs);

        return db;
      },
    },
    DbService,
  ],
  exports: [DbService],
})
export class OrbitDbModule {}
