import React, { Component } from 'react'; // If componet is taken out here, line 5 would need to read React.Componet
import './App.css';
import Header from '../Header/Header';
import Instructions from '../Instructions/Instructions'

class App extends Component {
  render() {
    return (
      // The html below is actually jsx
      <div className="App">
        <Header />
        <Instructions />
      </div>
    );
  }
}

export default App;
