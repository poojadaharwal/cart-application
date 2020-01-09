import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, document.getElementById('root'));

