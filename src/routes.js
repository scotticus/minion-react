import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Encounters from './components/Encounters';
import Monsters from './components/Monsters';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Encounters} />
    <Route path="monsters" component={Monsters} />
  </Route>
);
