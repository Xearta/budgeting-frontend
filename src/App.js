import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    fetch('/accounts')
      .then(res => res.json())
      .then(accounts => {
        console.log(accounts);
        console.log(accounts[0].transactions);
      });
  }

  render() {
    return (
      <div className='App'>
        <h2>App.js</h2>
      </div>
    );
  }
}

export default App;
