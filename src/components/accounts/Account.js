import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editAccount } from '../../actions/editAccount';
import { deleteAccount } from '../../actions/deleteAccount';

class Account extends Component {
  state = {
    id: this.props.account.id,
    name: this.props.account.name,
    planned: this.props.account.planned,
    spent: this.props.account.spent,
    remaining: this.props.account.remaining,
    available: this.props.account.available,
    transactions: this.props.account.transactions,
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
    const { name, planned, spent, remaining } = this.state;
    return (
      <div style={containerStyle} onClick={() => this.props.seeAccount(this.state)}>
        <div style={divStyle}>
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input
              type='text'
              onMouseOver={inputHover}
              onMouseLeave={inputLeave}
              style={inputStyle}
              value={name}
              placeholder='Budget Item Label'
              name='name'
              onChange={this.handleChange}
            />
          </form>
        </div>
        <div style={divStyle}>
          <form onSubmit={this.handleSubmit}>
            <label>Planned:</label>
            <input
              type='text'
              onMouseOver={inputHover}
              onMouseLeave={inputLeave}
              placeholder='$0.00'
              style={inputStyle}
              value={planned}
              name='planned'
              onChange={this.handleChange}
            />
          </form>
        </div>
        <div style={divStyle}>Spent: ${spent}</div>
        <div style={divStyle}>Remaining: ${remaining}</div>
        <div style={divStyle}>
          <button onClick={this.handleDelete}>Delete Account</button>
        </div>
      </div>
    );
  }
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
};

const divStyle = {
  background: '#fff',
  color: '#69757a',
  fontWeight: '600',
  textAlign: 'center',
  width: '80%',
  padding: '10px',
};

const inputStyle = {
  background: '#fff',
  border: '1px solid transparent',
  textAlign: 'center',
};

const inputHover = e => {
  e.target.style.background = '#f5f7f8';
};

const inputLeave = e => {
  e.target.style.background = '#fff';
};

export default connect(null, { editAccount, deleteAccount })(Account);
