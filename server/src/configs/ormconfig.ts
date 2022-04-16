import { entities } from '@@database/all-entities';
import { envs } from '../envs';
import { NODE_ENV } from './node-env';
import { DataSourceOptions } from 'typeorm';

export const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: envs.DATABASE_HOST,
  port: +envs.DATABASE_PORT,
  username: envs.DATABASE_USER,
  password: envs.DATABASE_PASSWORD,
  database: envs.DATABASE_NAME,
  entities,
  logging: NODE_ENV === 'development' ? 'all' : ['error', 'schema', 'warn'],
  logger: 'advanced-console',
  maxQueryExecutionTime: 300,
  synchronize: false,
  useUTC: true,
  extra: { max: 10 },
};
