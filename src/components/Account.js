import React from 'react';

const Account = props => {
  let account = props.accounts.filter(account => account.id == props.match.params.id)[0];

  return (
    <div>
      {account ? account.name : null} - {account ? account.balance : null}
    </div>
  );
};

export default Account;
