import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const RankMatches = lazy(() => import('./pages/RankMatches'));

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando ...</div>}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/rank" exact component={RankMatches} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
