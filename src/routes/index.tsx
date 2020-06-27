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
        <Route path="/network" exact component={Network} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/messages" exact component={Messages} />
        <Route path="/notifications" exact component={Notifications} />
        <Route path="/profile" component={Profile} />
      </Container>
    </Switch>
  </BrowserRouter>
);

export default routes;
