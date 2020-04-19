import React from 'react';
import logo from './assets/logo.svg';
import classes from './styles/Home.module.scss';

const Home = () => (
  <div className={classes.app}>
    <header className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className={classes.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default Home;
