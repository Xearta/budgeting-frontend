import React, { Component } from 'react';
import TransactionForm from '../components/transactions/TransactionForm';
import Transactions from '../components/transactions/Transactions';

class TransactionsContainer extends Component {
  render() {
    return (
      <div>
        <TransactionForm account={this.props.account} />
        <hr />
        <Transactions transactions={this.props.transactions} />
      </div>
    );
  }
}

export default TransactionsContainer;
