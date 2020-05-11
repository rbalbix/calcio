import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UpdateMatches from './pages/UpdateMatches';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={UpdateMatches} />
      </Switch>
    </BrowserRouter>
  );
}
