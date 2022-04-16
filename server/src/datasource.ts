import { DataSource } from 'typeorm';
import { configLocalEnvFile } from './config-local-env-file';
import { ormConfig } from './configs/ormconfig';
configLocalEnvFile();

export const PostgresDataSource = new DataSource({
  ...ormConfig,
  migrations: ['database/migrations/**/*.{js,ts}'],
});
