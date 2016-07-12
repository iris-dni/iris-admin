import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import PetitionFinder from 'pages/petition-finder';
import App from './app';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="petitions" />
      <Route path="petitions" component={PetitionFinder} />
    </Route>
  </Router>,
  document.getElementById('_root')
);
