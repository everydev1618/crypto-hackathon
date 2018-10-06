import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Token from './Token';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path ='/' component = { HomePage }/> 
          <Route path ='/token' component = { Token }/>
        </Switch>
      </Router>
    )
  }
}