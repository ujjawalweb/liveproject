import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render(
  <>
   <BrowserRouter basename="/app">
    <App />
 </BrowserRouter>
  </>,
  document.getElementById('root')
);



