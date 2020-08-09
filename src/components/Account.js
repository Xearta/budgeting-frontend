import React from 'react';
import TransactionsContainer from '../containers/TransactionsContainer';

const Account = props => {
  // let account = props.accounts[props.match.params.id - 1];
  // eslint-disable-next-line
  let account = props.accounts.filter(account => account.id == props.match.params.id)[0];

  return (
    <div>
      <h2>
        {account ? account.name : 'Account Loading...'} - ${account ? account.balance : null}
      </h2>
      <TransactionsContainer account={account} />
    </div>
  );
};

export default Account;
