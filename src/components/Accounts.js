import React from 'react';
import { Link } from 'react-router-dom';

const Accounts = props => {
  const accounts = props.accounts.map(account => (
    <li key={account.id}>
      <Link to={`/accounts/${account.id}`}>{account.name}</Link>
    </li>
  ));

  return (
    <div>
      <h2>Accounts:</h2>
      <ul>{props.loading ? <h3>Loading...</h3> : accounts}</ul>
    </div>
  );
};

export default Accounts;
