import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SuspenseLoading from './components/SuspenseLoading';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const RankMatches = lazy(() => import('./pages/RankMatches'));

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenseLoading />}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/rank" exact component={RankMatches} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
