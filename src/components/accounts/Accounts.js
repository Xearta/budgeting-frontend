import React, { useState } from 'react';
import Account from './Account';
import AccountView from './AccountView';
import { addAccount } from '../../actions/addAccount';
import { viewAccount } from '../../actions/viewAccount';
import { connect } from 'react-redux';

const Accounts = props => {
  const incomeAccounts = [];
  const expenseAccounts = [];
  const [account, setAccount] = useState([]);
  const [transactions, setTransactions] = useState([]);
  let budgetRemaining = 0;

  // eslint-disable-next-line
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
      spent: 0,
      remaining: 0,
      typeOfAccount: 'Income',
    };
    props.addAccount(account);
  };

  const addExpenseAccount = () => {
    const account = {
      name: 'Label',
      planned: 0,
      spent: 0,
      remaining: 0,
      typeOfAccount: 'Expense',
    };
    props.addAccount(account);
  };

  const seeAccount = account => {
    props.viewAccount(account);
    setAccount(account);
    setTransactions(account.transactions);
  };

  return (
    <div style={budgetPageStyle}>
      <div style={accountsContainerStyle}>
        <div style={budgetStyle}>
          <h1>Budget Available: ${budgetRemaining}</h1>
          <hr />
        </div>
        <h2>Incomes:</h2>
        {incomeAccounts.map(account => (
          <Account key={account.id} account={account} seeAccount={seeAccount} />
        ))}
        <br />
        <button onClick={addIncomeAccount}>Add An Income Account</button>
        <hr />
        <h2>Expenses:</h2>
        {expenseAccounts.map(account => (
          <Account key={account.id} account={account} seeAccount={seeAccount} />
        ))}
        <br />
        <button onClick={addExpenseAccount}>Add An Expense Account</button>
      </div>
      <div style={accountViewContainerStyle}>
        <AccountView account={account} transactions={transactions} />
      </div>
    </div>
  );
};

const budgetStyle = {
  position: 'sticky',
  backgroundColor: '#f5f7f8',
  paddingTop: '10px',
  top: '119px',
};

const budgetPageStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#f5f7f8',
};

const accountsContainerStyle = {
  padding: '10px',
  backgroundColor: '#f5f7f8',
  width: '59%',
};

const accountViewContainerStyle = {
  width: '39%',
};

export default connect(null, { addAccount, viewAccount })(Accounts);
