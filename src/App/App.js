import React from 'react';
import { Router, Route, Redirect, IndexRedirect } from 'react-router';

import './App.css';

import { RouteHome } from '../RouteHome/RouteHome';
import { RouteForm } from '../RouteForm/RouteForm';
import { Header } from '../Header/Header';

export const App = ( { history } ) => {
  return (
    <div className="app">
      <Header />
      <Router history={history}>
        <Route path="/">
          <IndexRedirect to='forms' />
          <Route path="forms/:id" component={RouteForm} />
          <Route path="forms" component={RouteHome} />
          <Redirect from="*" to="forms" />
          <Redirect from="*/*/**" to="forms" />
        </Route>
      </Router>
    </div>
  );
}
