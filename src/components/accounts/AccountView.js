import React from 'react';
import TransactionsContainer from '../../containers/TransactionsContainer';

const AccountView = props => {
  // eslint-disable-next-line
  if (props.account != '') {
    return (
      <div style={containerStyle}>
        <h2 style={{ margin: 0 }}>
          {props.account.name} - ${props.account.remaining}
        </h2>
        Remaining
        <TransactionsContainer account={props.account} transactions={props.transactions} />
      </div>
    );
  } else {
    return (
      <div style={containerStyle}>
        <h2>Click on a budget item to view it in more details...</h2>
      </div>
    );
  }
};

const containerStyle = {
  backgroundColor: '#fff',
  position: 'sticky',
  top: '119px',
  margin: '10px',
  paddingTop: '50px',
  textAlign: 'center',
};

export default AccountView;
