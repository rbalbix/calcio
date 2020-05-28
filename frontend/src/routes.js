import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import RankMatches from './pages/RankMatches';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/rank" exact component={RankMatches} />
      </Switch>
    </BrowserRouter>
  );
}
