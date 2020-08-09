import React from 'react';
import AccountView from './AccountView';

const Accounts = props => {
  const incomeAccounts = [];
  const expenseAccounts = [];
  let budgetRemaining = 0;

  props.accounts.map(account => {
    if (account.typeOfAccount === 'Income') {
      incomeAccounts.push(account);
      budgetRemaining += account.balance;
    } else if (account.typeOfAccount === 'Expense') {
      expenseAccounts.push(account);
      budgetRemaining -= account.balance;
    }
  });

  return (
    <div>
      <h1>Budget Available: ${budgetRemaining}</h1>
      <h2>Incomes:</h2>
      {incomeAccounts.map(account => (
        <AccountView key={account.id} account={account} />
      ))}
      <hr />
      <h2>Expenses:</h2>
      {expenseAccounts.map(account => (
        <AccountView key={account.id} account={account} />
      ))}
    </div>
  );
};

export default Accounts;
