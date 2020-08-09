import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchAccounts } from '../actions/fetchAccounts';
import AccountForm from '../components/AccountForm';
import Accounts from '../components/Accounts';
import AccountView from '../components/AccountView';

class accountsContainer extends Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/accounts/new' component={AccountForm} />
          <Route
            path='/accounts/:id'
            render={routerProps => <AccountView {...routerProps} accounts={this.props.accounts} />}
          />
          <Route
            path='/accounts'
            render={routerProps => <Accounts {...routerProps} accounts={this.props.accounts} />}
          />
          <Route path='/budget' render={routerProps => <Accounts {...routerProps} accounts={this.props.accounts} />} />
        </Switch>
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
