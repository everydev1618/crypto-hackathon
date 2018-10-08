import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component{  
  render() {
    return(
      <div className = 'container'>
        <div className="home">
          <h1>Welcome to the creation of Crypto Craziness</h1>
          <button className = 'create-btn' type = 'submit'>
            <Link to='/token'>Create a Token -></Link>
          </button>
        </div>
      </div>
    )
  }
}