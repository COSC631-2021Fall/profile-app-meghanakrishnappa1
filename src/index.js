import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './components/contact'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('contact')
);