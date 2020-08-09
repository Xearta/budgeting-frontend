import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editAccount } from '../actions/editAccount';
import { deleteAccount } from '../actions/deleteAccount';

class Account extends Component {
  state = {
    id: this.props.account.id,
    name: this.props.account.name,
    balance: this.props.account.balance,
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.editAccount(this.state);
    this.setState({
      id: this.props.account.id,
      name: this.props.account.name,
      balance: this.props.account.balance,
    });
  };

  handleDelete = () => {
    this.props.deleteAccount(this.state);
  };

  render() {
    const { id, name, balance } = this.props.account;
    return (
      <div>
        <Link to={`/accounts/${id}`}>
          {name} - ${balance}
        </Link>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder={balance} name='balance' onChange={this.handleChange} />
        </form>
        <button onClick={this.handleDelete}>Delete Account</button>
      </div>
    );
  }
}

export default connect(null, { editAccount, deleteAccount })(Account);
