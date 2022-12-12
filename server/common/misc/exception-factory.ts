import { ApolloError } from 'apollo-server-express';
import { ValidationError } from 'class-validator';
import flattenDeep from 'lodash/flattenDeep';
import flatMap from 'lodash/flatMap';
import concat from 'lodash/concat';

type NestedArray<T> = Array<T> | Array<NestedArray<T>>;

export const exceptionFactory = (errors: ValidationError[]) => {
  const errorMessages = concat(
    flatMap(flattenDeep(findErrorWithConstraints(errors)), (x) =>
      Object.values(x.constraints),
    ),
  );

  return new ApolloError(errorMessages.join('; '), 'ValidationError');
};

function findErrorWithConstraints(
  error: ValidationError | ValidationError[],
): NestedArray<Required<Pick<ValidationError, 'constraints'>>> {
  if (Array.isArray(error)) {
    return error.map(findErrorWithConstraints);
  }

  if (error.constraints) {
    return [error as any];
  }

  if (error.children && error.children.length > 0) {
    return error.children.map(findErrorWithConstraints);
  }

  return [];
}
