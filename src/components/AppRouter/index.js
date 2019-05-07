import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header';
import Events from '../Events';
import Login from '../Login';

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/events" component={Events} />
          <Redirect from="/login" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
