import React from 'react';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../actions/deleteAccount';
import { connect } from 'react-redux';

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

  const incomes = incomeAccounts.map(account => (
    <li key={account.id}>
      <Link to={`/accounts/${account.id}`}>
        {account.name} - ${account.balance}
      </Link>{' '}
      <button onClick={() => handleDelete(account)}>X</button>
    </li>
  ));

  const expenses = expenseAccounts.map(account => (
    <li key={account.id}>
      <Link to={`/accounts/${account.id}`}>
        {account.name} - ${account.balance}
      </Link>
    </li>
  ));

  const handleDelete = account => {
    props.deleteAccount(account);
  };

  return (
    <div>
      <h1>Budget Available: ${budgetRemaining}</h1>
      <h2>Incomes:</h2>
      {incomes}
      <Link to='/accounts/new'>Create a new Income account</Link>
      <hr />
      <h2>Expenses:</h2>
      {expenses}
      <Link to='/accounts/new'>Create a new Expense account</Link>
    </div>
  );
};

export default connect(null, { deleteAccount })(Accounts);
