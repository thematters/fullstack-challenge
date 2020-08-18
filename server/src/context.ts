// eslint-disable-next-line no-unused-vars
import { Config } from 'apollo-server';
import * as stores from './stores';

export type Context = Config['context'] & {
  dataSources: typeof stores,
};
