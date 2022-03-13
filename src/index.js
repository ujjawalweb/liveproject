import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import HashRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render(
  <>
   <BrowserRouter basename="/admin">
    <App />
 </BrowserRouter>
  </>,
  document.getElementById('root')
);



