import React, { ReactElement, Suspense } from 'react'
import Loading from '../components/Loading';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const HomePage = React.lazy(() => import('./HomePage'));

export default function Index(): ReactElement {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route path="/">
            <HomePage />
          </Route>
        </Suspense>
      </Switch>
    </Router>
  )
}

