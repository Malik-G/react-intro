import React, { Component } from 'react'; // If componet is taken out here, line 5 would need to read React.Componet
import './Instructions.css';

class Instructions extends Component {
  render() {
    return (
      // The html below is actually jsx
      <div>
         <p>Edit <code>src/App.js</code> and save to reload.</p>
         <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
         >
         Learn React
         </a>
      </div>
    );
  }
}

export default Instructions;