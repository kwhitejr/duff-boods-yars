import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router/es6';
import { syncHistoryWithStore } from 'react-router-redux';
import cookie from 'react-cookie';
import { install as offlineInstall } from 'offline-plugin/runtime'; // eslint-disable-line
import jwtDecode from 'jwt-decode';

import routes from 'routes';
import configureStore from 'store';
import { AUTH_USER } from 'actions/auth_actions';
import 'styles/app.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const token = cookie.load('token');

if (token) {
  // Update application state. User has token and is probably authenticated
  store.dispatch({ type: AUTH_USER });
}

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'production') {
  offlineInstall();
}
