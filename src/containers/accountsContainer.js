import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchAccounts } from '../actions/fetchAccounts';
import Header from '../components/layout/Header';
import About from './pages/About';
import AccountForm from '../components/accounts/AccountForm';
import Accounts from '../components/accounts/Accounts';
import AccountView from '../components/accounts/AccountView';

class accountsContainer extends Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <div>
        <Header />
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
          <Route path='/about' component={About} />
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
