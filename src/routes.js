import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Encounters from './components/Encounters';
import Encounter from './components/Encounter';
import Monsters from './components/Monsters';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Encounters} />
    <Route path="encounters/:id" component={Encounter} />
    <Route path="monsters" component={Monsters} />
  </Route>
);
