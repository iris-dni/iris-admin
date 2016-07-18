import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import PetitionFinder from 'pages/petition-finder';
import UserFinder from 'pages/user-finder';
import App from './app';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="petitions" />
      <Route path="petitions" component={PetitionFinder} />
      <Route path="users" component={UserFinder} />
    </Route>
  </Router>,
  document.getElementById('_root')
);

// show the sidebar on wide screens
if (document.body.clientWidth > 768) {
  document.body.classList.add('sidebar-is-open');
}
