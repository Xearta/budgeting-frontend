import React from 'react';
import { connect } from 'react-redux';
import { deleteTransaction } from '../actions/deleteTransaction';

const Transactions = props => {
  const handleDelete = transaction => {
    props.deleteTransaction(transaction.id, transaction.account_id);
  };

  return (
    <div>
      <h2>Transactions</h2>
      {props.transactions &&
        props.transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.date} | {transaction.typeOfTransaction} - ${transaction.amount} - "{transaction.description}"{' '}
            <button onClick={() => handleDelete(transaction)}>Delete</button>
          </li>
        ))}
    </div>
  );
};

export default connect(null, { deleteTransaction })(Transactions);
