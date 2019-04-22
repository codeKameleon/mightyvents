import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header';
import Events from '../Events';
import Setup from '../Setup';

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Events} />
          <Route path="/setup" component={Setup} />
          <Redirect from="/events" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
