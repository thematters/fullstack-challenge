// eslint-disable-next-line no-unused-vars
import { RouteConfig } from 'react-router-config';

import { Article } from './Article';
import { Articles } from './Articles';
import { NewArticle } from './NewArticle';

export const routes: RouteConfig[] = [
  {
    exact: true,
    path: '/',
    component: Articles,
  },
  {
    exact: true,
    path: '/articles/new',
    component: NewArticle,
  },
  {
    path: '/articles/:id',
    component: Article,
  },
];

export default routes;
