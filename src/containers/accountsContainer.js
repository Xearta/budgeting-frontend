import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from '../actions/fetchAccounts';
import AccountForm from '../components/AccountForm';
import Accounts from '../components/Accounts';

class accountsContainer extends Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <div>
        <AccountForm />
        <Accounts accounts={this.props.accounts} />
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

export default connect(mapStateToProps, { fetchAccounts })(accountsContainer);
