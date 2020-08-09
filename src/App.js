import React from 'react';
import Header from './components/layout/Header';
import AccountsContainer from './containers/AccountsContainer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <AccountsContainer />
      </div>
    );
  }
}

export default App;
