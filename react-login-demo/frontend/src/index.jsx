import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Assuming your main component is named App

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
