import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TokenForm from './TokenForm';

class Token extends Component {
  render() {        
    const { ledger } = this.props;    
    return (
      <div>
        {(ledger.length > 1) ? <Redirect from='/token' to= '/ledger' /> : <TokenForm/>}
      </div>      
    )
  }
}

const mapStateToProps = (store) => {
  return {
    ledger: store.token.ledger
  }
}

export default connect(mapStateToProps)(Token); 