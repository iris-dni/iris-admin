import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import PetitionFinder from 'pages/petition-finder';
import UserFinder from 'pages/user-finder';
import UserEditor from 'pages/user-editor';
import App from './app';
import settings from 'config/settings';

function render() {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="petitions" />
        <Route path="petitions" component={PetitionFinder} />
        <Route path="users" component={UserFinder} />
        <Route path="user/:id" component={UserEditor} />
      </Route>
    </Router>,
    document.getElementById('_root')
  );
}

import initSwagger from 'api/swagger';
initSwagger(settings.swagger.specUrl, render);

// show the sidebar on wide screens
if (document.body.clientWidth > 768) {
  document.body.classList.add('sidebar-is-open');
}
