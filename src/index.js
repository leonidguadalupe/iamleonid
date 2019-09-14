import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

import ProfileViewComponent from './views/profile/Profile';
import * as serviceWorker from './serviceWorker';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={ProfileViewComponent}/>
    </Switch>
  </Router>, document.getElementById('root'));
serviceWorker.unregister();
