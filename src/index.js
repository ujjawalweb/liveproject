import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render(
  <>
   <BrowserRouter basename={process.env.PUBLIC_https://ujjawalweb.github.io/liveproject}>
    <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);



