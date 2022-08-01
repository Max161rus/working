import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import admin from './admin';
import auth from './auth';

const routes = Array.prototype.concat(auth, admin);

const router = () => {
  return (
    <Switch>
      { routes.map(({ path, exact, component }) => {
        return (
          <Route
            key={path}
            path={path}
            exact={exact}
            component={component}
          />
        );
      }) }

      <Redirect to="/login" />
    </Switch>
  );
};

export default router;
