import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchAccounts } from '../actions/fetchAccounts';
import Header from '../components/layout/Header';
import About from './pages/About';
import Accounts from '../components/accounts/Accounts';

class accountsContainer extends Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
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
