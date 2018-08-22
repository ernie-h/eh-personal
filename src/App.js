import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="AppMain">
        <header className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 >Ernie Hao</h1>
        </header>
        <p className="description">
          Welcome to my website!
        </p>
      </div>
    );
  }
}

export default App;
