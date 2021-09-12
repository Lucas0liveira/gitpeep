import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import User from './components/User';
import UserNotFound from './components/UserNotFound';
import UserRepos from './components/UserRepos';
import UserStarred from './components/UserStarred';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user/:username" exact component={User} />
        <Route path="/not-found" component={UserNotFound} />
        <Route path="/user/:username/repos" component={UserRepos} />
        <Route path="/user/:username/starred" component={UserStarred} />
      </Switch>
    </BrowserRouter>
  );
}
