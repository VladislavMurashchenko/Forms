import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRedirect } from 'react-router';
import { connect } from 'react-redux';
import { getFormsInfo } from '../../actions/getFormsInfo';
import { GET_API_URL } from '../../constants/GET_API_URL';

import './App.css';

import { RouteHome } from '../RouteHome/RouteHome';
import  RouteForm  from '../RouteForm/RouteForm';
import { Header } from '../Header/Header';

class App extends Component {
  componentDidMount() {
    this.props.onGetFormsInfo();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Router history={this.props.history}>
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
}

App = connect(
  null,
  dispatch => ({
    onGetFormsInfo: () => {
      dispatch(getFormsInfo(GET_API_URL));
    }
  })
)(App);

export { App };
