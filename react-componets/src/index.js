import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componets/App/App.js'; // From App.js in the componets/App directory
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //Matches the id of in the index.html div

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
