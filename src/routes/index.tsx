import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Login} />

    <Route path="/" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
