// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your main CSS file here
import App from './App';
import { UserProvider } from './context/UserContext';

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);
