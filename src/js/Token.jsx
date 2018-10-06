import React, { Component } from 'react';
import axios from 'axios';

export default class Token extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      sym: '',
      totalSupply : 10000      
    }
  }

  handleName(name) {
    this.setState({
      name: name
    })
  }
  handleSym(sym) {
    this.setState({
      sym: sym
    })
  }

  render() {
    return (
      <div className = 'container'>
        <form className = 'token-form'>
          <section>
            <h2>Create Your Token</h2>
              <div className = 'form-group'>
                <label for = 'token-name'>Enter Token Name:</label>
                <input  id = 'token-name'   
                        className = 'input'
                        type = 'text' 
                        onChange = {this.handleName}/>
              </div>
              <div className="form-group">
                <label for = 'token-sym'>Enter Token Symbol:</label>
                <input  id = 'token-sym'   
                        type = 'text' 
                        className = 'input'
                        onChange = {this.handleSym}/>
              </div>
              <div className="form-group">
                <label for = 'token-supply'>Enter Total Supply:</label>
                <input  id = 'token-supply'
                        className = 'input'   
                        type = 'number' 
                        onChange = {this.handleSupply}/>
              </div>
              <div className="form-group">
                <button type = 'submit' className ='submit-btn'> submit</button>
              </div>
            </section>
        </form>
      </div>
    )
  }
}