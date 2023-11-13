// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';


// Import the root component
import App from './App';
import './index.css'; 
dotenv.config();
// Render the root component into the HTML element with id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
