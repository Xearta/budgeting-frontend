import React from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from './actions/fetchAccounts';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    const accounts = this.props.accounts.map((account, i) => (
      <li key={i}>
        {account.name} | ${account.balance}
      </li>
    ));
    return (
      <div className='App'>
        <h2>App.js</h2>
        <hr />
        <h3>Accounts</h3>
        <ul>{this.props.loading ? <h3>Loading Accounts...</h3> : accounts}</ul>
        <hr />
        <h3>Transactions</h3>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accountReducer.accounts,
    loading: state.accountReducer.loading,
  };
};

export default connect(mapStateToProps, { fetchAccounts })(App);
