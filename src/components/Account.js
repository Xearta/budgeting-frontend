import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editAccount } from '../actions/editAccount';
import { deleteAccount } from '../actions/deleteAccount';

class Account extends Component {
  state = {
    id: this.props.account.id,
    name: this.props.account.name,
    planned: this.props.account.planned,
    spent: this.props.account.spent,
    remaining: this.props.account.remaining,
    available: this.props.account.available,
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      remaining: this.state.planned - this.state.spent,
    });
    this.props.editAccount(this.state);
  };

  handleDelete = () => {
    this.props.deleteAccount(this.state);
  };

  render() {
    const { id, name, planned, spent, remaining, available } = this.state;
    return (
      <div>
        <Link to={`/accounts/${id}`}>{name}</Link>
        <br />
        Planned: ${planned}
        <br />
        Spent: ${spent}
        <br />
        Remaining: ${remaining}
        <br />
        Available: ${available}
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type='text' value={name} name='name' onChange={this.handleChange} />
        </form>
        <form onSubmit={this.handleSubmit}>
          <label>Budget Amount:</label>
          <input type='text' value={planned} name='planned' onChange={this.handleChange} />
        </form>
        <button onClick={this.handleDelete}>Delete Account</button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default connect(null, { editAccount, deleteAccount })(Account);
