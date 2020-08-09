import React from 'react';
import { connect } from 'react-redux';
import { addAccount } from '../actions/addAccount';

class AccountForm extends React.Component {
  state = {
    name: '',
    planned: '',
    typeOfAccount: 'Income',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addAccount(this.state);
    this.setState({
      name: '',
      planned: '',
      typeOfAccount: 'Income',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Checking Account Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange} />
          <br />
          <label>Checking Account planned: </label>
          <input
            type='text'
            placeholder='planned'
            value={this.state.planned}
            name='planned'
            onChange={this.handleChange}
          />
          <br />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default connect(null, { addAccount })(AccountForm);
