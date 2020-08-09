import React from 'react';
import TransactionsContainer from '../containers/TransactionsContainer';
import { connect } from 'react-redux';
import { deleteAccount } from '../actions/deleteAccount';

const Account = props => {
  // let account = props.accounts[props.match.params.id - 1];
  // eslint-disable-next-line
  let account = props.accounts.filter(account => account.id == props.match.params.id)[0];

  const handleDelete = account => {
    props.deleteAccount(account);
  };

  return (
    <div>
      <h2>
        {account ? account.name : 'Account Loading...'} - ${account ? account.balance : null}
      </h2>
      <TransactionsContainer account={account} />
      <hr />
      <button onClick={() => handleDelete(account)}>Delete Account</button>
    </div>
  );
};

export default connect(null, { deleteAccount })(Account);
