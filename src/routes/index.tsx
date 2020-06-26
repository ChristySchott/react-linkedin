import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { Container } from './styles';

import Dashboard from 'pages/Dashboard';
import Profile from 'pages/Profile';
import Header from 'components/Header';

const routes: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/" exact component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default routes;
