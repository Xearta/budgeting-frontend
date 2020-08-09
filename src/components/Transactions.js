import React from 'react';

const Transactions = props => {
  return (
    <div>
      <h2>Transactions</h2>
      {props.transactions &&
        props.transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.date} | {transaction.typeOfTransaction} - ${transaction.amount} - "{transaction.description}"
          </li>
        ))}
    </div>
  );
};

export default Transactions;
