import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';

render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, document.getElementById('root'));

