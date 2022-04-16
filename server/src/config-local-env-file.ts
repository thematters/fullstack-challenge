import { join } from 'path';
import { config } from 'dotenv';

export const configLocalEnvFile = () =>
  config({ path: join(process.cwd(), '.env') });
