import React from 'react';
import Account from './Account';
import { addAccount } from '../actions/addAccount';
import { connect } from 'react-redux';

const Accounts = props => {
  const incomeAccounts = [];
  const expenseAccounts = [];
  let budgetRemaining = 0;

  props.accounts.map(account => {
    if (account.typeOfAccount === 'Income') {
      incomeAccounts.push(account);
      budgetRemaining += account.planned;
    } else if (account.typeOfAccount === 'Expense') {
      expenseAccounts.push(account);
      budgetRemaining -= account.planned;
    }
  });

  const addIncomeAccount = () => {
    const account = {
      name: `Income ${incomeAccounts.length + 1}`,
      planned: 0,
      typeOfAccount: 'Income',
    };
    props.addAccount(account);
  };

  const addExpenseAccount = () => {
    const account = {
      name: 'Label',
      planned: 0,
      typeOfAccount: 'Expense',
    };
    props.addAccount(account);
  };

  return (
    <div>
      <h1>Budget Available: ${budgetRemaining}</h1>
      <h2>Incomes:</h2>
      {incomeAccounts.map(account => (
        <Account key={account.id} account={account} />
      ))}
      <br />
      <button onClick={addIncomeAccount}>Add An Income Account</button>
      <hr />
      <h2>Expenses:</h2>
      {expenseAccounts.map(account => (
        <Account key={account.id} account={account} />
      ))}
      <br />
      <button onClick={addExpenseAccount}>Add An Expense Account</button>
    </div>
  );
};

export default connect(null, { addAccount })(Accounts);
