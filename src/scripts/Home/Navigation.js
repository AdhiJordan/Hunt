import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactIntroduction from './../Topics/ReactIntroduction.js';
import ReactTools from './../Topics/ReactTools.js';
import { browserHistory } from 'react-router';


const routes = (
  <Route component={ReactTools}>
    <Route   path="/" component={ReactTools} />
    <Route   path="/Introduction" component={ReactTools} />
    <Route   path="/Tools" component={ReactTools} />
  </Route>
);

class Navigation extends Component {
  render() {
    return (
      <Router history={browserHistory} createElement={this.createElement}>
        {routes}
      </Router>
    )
  }
}


export default Navigation