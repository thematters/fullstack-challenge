import React, { ReactElement, Suspense } from 'react'
import Loading from '../components/Loading';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const HomePage = React.lazy(() => import('./HomePage'));
const ArticleCreatePage = React.lazy(() => import('./ArticleCreatePage'));
const ArticleEditPage = React.lazy(() => import('./ArticleEditPage'));

export default function Index(): ReactElement {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/create" component={ArticleCreatePage} />
          <Route exact path="/edit/:id" component={ArticleEditPage} />
          <Route exact path="/:page" component={HomePage} />
          <Route exact path="/" component={HomePage} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Suspense>
    </Router> 
  )
}

