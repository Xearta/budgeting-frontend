import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTransaction } from '../../actions/addTransaction';

class TransactionForm extends Component {
  state = {
    typeOfTransaction: 'expense',
    amount: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTransaction(this.state, this.props.account.id);
    this.setState({
      typeOfTransaction: 'expense',
      amount: '',
    });
  };

  render() {
    return (
      <div>
        <h2>Transaction Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Transaction Type: </label>
          <select name='typeOfTransaction' value={this.state.typeOfTransaction} onChange={this.handleChange}>
            <option>income</option>
            <option>expense</option>
          </select>
          <br />
          <label>Transaction Amount: </label>
          <input type='text' placeholder='Amount' name='amount' onChange={this.handleChange}></input>
          <br />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default connect(null, { addTransaction })(TransactionForm);
