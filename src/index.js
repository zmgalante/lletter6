import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import Home from './pages/Home/Home';
import HowToPlay from './pages/HowToPlay/HowToPlay';
import './index.css';
import * as serviceWorker from './serviceWorker';

render(
  <React.StrictMode>
    <Router>
      <Home path={`${process.env.PUBLIC_URL}/`} />
      <HowToPlay path={`${process.env.PUBLIC_URL}/how-to-play`} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
