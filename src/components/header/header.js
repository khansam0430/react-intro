import React, { Component } from 'react';
// import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
          <code>Hi my name is Samreen. Welcome to my React App</code> 
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Header;
