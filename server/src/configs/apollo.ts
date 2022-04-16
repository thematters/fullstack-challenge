import type { GqlModuleAsyncOptions } from '@nestjs/graphql';
import { NODE_ENV } from './node-env';
import { devCorsOptions } from './cors-options';

export const apolloAsyncConfig: GqlModuleAsyncOptions = {
  useFactory: () => ({
    introspection: NODE_ENV !== 'production',
    playground: NODE_ENV === 'development',
    autoSchemaFile: true,
    sortSchema: false,
    cors: NODE_ENV === 'development' ? devCorsOptions : undefined,
  }),
};
