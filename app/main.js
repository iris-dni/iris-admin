import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import PetitionFinder from 'petition/finder';
import PetitionEditor from 'petition/editor';
import LetterCover from 'petition/letter-cover';
import LetterAppendix from 'petition/letter-appendix';
import UserFinder from 'user/finder';
import UserEditor from 'user/editor';
import CityFinder from 'city/finder';
import App from './app';
import settings from 'config/settings';
import LoginPage from 'auth/login';


function render() {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/petition/:id/letter/cover" component={LetterCover} />
      <Route path="/petition/:id/letter/appendix" component={LetterAppendix} />
      <Route path="/" component={App}>
        <IndexRedirect to="petitions" />
        <Route path="petitions" component={PetitionFinder} />
        <Route path="petition/:id" component={PetitionEditor} />
        <Route path="users" component={UserFinder} />
        <Route path="user/:id" component={UserEditor} />
        <Route path="cities" component={CityFinder} />
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
