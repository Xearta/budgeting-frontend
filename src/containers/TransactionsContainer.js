import React, { Component } from 'react';
import TransactionForm from '../components/TransactionForm';
import Transactions from '../components/Transactions';

class TransactionsContainer extends Component {
  render() {
    return (
      <div>
        <TransactionForm account={this.props.account} />
        <hr />
        <Transactions transactions={this.props.account && this.props.account.transactions} />
      </div>
    );
  }
}

export default TransactionsContainer;
