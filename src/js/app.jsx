import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import TokenForm from './components/Token/Token';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path ='/' component = { HomePage }/> 
          <Route path ='/token' component = { TokenForm }/>
        </Switch>
      </Router>
    )
  }
}