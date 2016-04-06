import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from 'containers/App';
import Todo from 'containers/Todo';
import Counter from 'containers/Counter';
import NotFound from 'containers/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/todo" />
    <Route path="todo" component={Todo} />
    <Route path="counter" component={Counter} />
    <Route path="*" component={NotFound} />
  </Route>
);
