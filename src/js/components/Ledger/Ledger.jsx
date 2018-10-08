import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Ledger extends Component {
  constructor(props) {
    super(props);
    this.table = this.table.bind(this);
  }

  table(ledger, name, sym) {    
    return (
    <div className = 'ledger'>
      <div className = 'ledger-title'>{name}</div>
      <div className = 'ledger-sym'>SYMBOL: {sym}</div>      
        <table>
          <tbody>
            <tr>
              <td className = 'th th-acc'>Account</td>
              <td className = 'th th-am'>Amount</td>
            </tr>
            {ledger.map((account, i) => {
              return (
                <tr key = {i}>
                  <td>{account.address}</td>
                  <td>{account.amount}</td>
                </tr>
              )               
            })}
          </tbody>
        </table>
      </div>
    )
  }


  render() {    
    const { ledger,name, sym } = this.props;        
    return (
      <div className = 'container table-container'>
        {(ledger.length > 1) ? this.table(ledger, name, sym) : <Redirect to = '/token' from = '/ledger'/>}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    name: store.token.name,
    ledger: store.token.ledger,
    sym: store.token.sym,
  }
}

export default connect(mapStateToProps)(Ledger);