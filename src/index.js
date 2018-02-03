import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, browserHistory, Redirect, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
// Components
import { RouteHome } from './RouteHome';
import { RouteForm } from './RouteForm';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory , store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRedirect to='forms' />
        <Route path="forms/:id" component={RouteForm} />
        <Route path="forms" component={RouteHome} />
        <Redirect from="*" to="forms" />
        <Redirect from="*/*/**" to="forms" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
