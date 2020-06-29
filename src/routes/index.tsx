import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Profile from 'pages/Profile';
import Header from 'components/Header';
import Network from 'pages/Network';
import Messages from 'pages/Messages';
import Jobs from 'pages/Jobs';
import Notifications from 'pages/Notifications';
import Container from './styles';

const routes: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Container>
        <Route path="/" exact component={Dashboard} />
        <Route path="/network" component={Network} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/messages" component={Messages} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/profile" component={Profile} />
      </Container>
    </Switch>
  </BrowserRouter>
);

export default routes;
