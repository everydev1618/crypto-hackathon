import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Token from './components/Token/Token';
import Ledger from './components/Ledger/Ledger';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path ='/' component = { HomePage }/>
          <Route path ='/ledger' component = { Ledger }/>      
          <Route path ='/token' component = { Token }/>
          
        </Switch>
      </Router>
    )
  }
}