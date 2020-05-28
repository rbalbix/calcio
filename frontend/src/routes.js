import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RankMatches from './pages/RankMatches';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={RankMatches} />
      </Switch>
    </BrowserRouter>
  );
}
