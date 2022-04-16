import { EnvVariableNotSetError } from '@@common/misc/env-variable-not-set-error';
import type { NonNilProps } from '@@common/misc/non-nil-props-type';

const {
  NODE_ENV,
  PORT,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

const _envs = {
  NODE_ENV,
  PORT,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
};

Object.entries(_envs).forEach(([key, value]) => {
  if (!value) {
    throw new EnvVariableNotSetError(key);
  }

  _envs[key as keyof typeof _envs] = value
    .replace(/\\n/gi, '\n')
    .replace(/(^"|"$)/gi, '');
});

const envs = _envs as NonNilProps<typeof _envs>;

export { envs };
