import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <div className="App">
   <Home />
   </div>,
  document.getElementById('home')
);

reportWebVitals();
