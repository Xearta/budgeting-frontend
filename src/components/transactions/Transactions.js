import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTransaction } from '../../actions/deleteTransaction';

const Transactions = props => {
  const [transactions, setTransactions] = useState([props.transactions]);

  const handleDelete = transaction => {
    const newTransactions = props.transactions.filter(trans => trans.id != transaction.id);
    props.deleteTransaction(transaction.id, transaction.account_id);
    setTransactions(newTransactions);

    console.log(props.transactions);
    console.log(newTransactions);
  };

  return (
    <div>
      <h2>Transactions ({props.transactions.length})</h2>
      {props.transactions.map(transaction => (
        <li key={transaction.id}>
          {transaction.date} | {transaction.typeOfTransaction} - ${transaction.amount} - "{transaction.description}"{' '}
          <button onClick={() => handleDelete(transaction)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default connect(null, { deleteTransaction })(Transactions);
