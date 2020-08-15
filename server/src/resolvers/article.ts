// eslint-disable-next-line no-unused-vars
import { IFieldResolver } from 'apollo-server';

// eslint-disable-next-line import/prefer-default-export
export const articles: IFieldResolver<null, null> = () => ([{
  title: 'Hi',
  content: 'content',
}]);
