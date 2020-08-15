// eslint-disable-next-line no-unused-vars
import { RouteConfig } from 'react-router-config';

import { Articles, Article, Submit } from './pages';

export const routes: RouteConfig[] = [
  {
    exact: true,
    path: '/',
    component: Articles,
  },
  {
    exact: true,
    path: '/articles/submit',
    component: Submit,
  },
  {
    path: '/articles/:id',
    component: Article,
  },
];

export default routes;
