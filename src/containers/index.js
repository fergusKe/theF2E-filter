import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import 'bootstrap/scss/_functions.scss';
// import 'bootstrap/scss/bootstrap.scss';

// import Home from '../containers/Home/Home';

import ListItems from '../components/ListItems';
import Item from '../components/Item';
import NotFound from '../containers/NotFound/NotFound';

// @import 'bootstrap/scss/_functions.scss';
// @import './helpers/_variables';
// @import 'bootstrap/scss/bootstrap.scss';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ListItems} />
      <Route path="/item" component={Item} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;
