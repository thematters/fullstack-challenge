/* eslint-disable no-unused-vars */
import { IFieldResolver } from 'apollo-server';

import { Article } from '../types/types';

// eslint-disable-next-line import/prefer-default-export
export const articles: IFieldResolver<null, null> = (): Article[] => ([{
  id: '1',
  title: 'Hi',
  content: 'content',
}]);
