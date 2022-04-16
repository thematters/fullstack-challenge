import { envs } from '../envs';

export const NODE_ENV = envs.NODE_ENV as
  | 'development'
  | 'staging'
  | 'production';
