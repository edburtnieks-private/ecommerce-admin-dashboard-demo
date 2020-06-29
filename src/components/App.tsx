import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { routes } from '../routes';
import { Header } from './Header';

import styles from './App.module.scss';

const RouteWithSubRoutes = (route: any) => (
  <Route
    path={route.path}
    render={(props) => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

export const App = () => (
  <Router>
    <Header className={styles.header} />

    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  </Router>
);
