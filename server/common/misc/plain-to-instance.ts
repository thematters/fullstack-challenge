import { Type } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

export const plainToModel = <T, Keys extends keyof T = never>(
  cls: Type<T>,
  plain: Omit<T, Keys>,
): T => plainToInstance(cls, plain);

export const plainToDb = <T>(cls: Type<T>, plain: Partial<T>): T =>
  plainToInstance(cls, plain);
