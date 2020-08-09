import React from 'react';

const Accounts = props => {
  const accounts = props.accounts.map(account => (
    <li key={account.id}>
      {account.name} - ${account.balance}
    </li>
  ));

  return (
    <div>
      <ul>{props.loading ? <h3>Loading.....</h3> : accounts}</ul>
    </div>
  );
};

export default Accounts;
