import React, { Component } from 'react'; // If componet is taken out here, line 5 would need to read React.Componet
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      // The html below is actually jsx
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;