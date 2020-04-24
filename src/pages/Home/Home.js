import React from 'react';
import { Link } from '@reach/router';
// import classes from './styles/Home.module.scss';

const Home = () => (
  <section>
    <header>
      <h1>Love Letter</h1>
      <h2>6-player version</h2>
    </header>
    <ul>
      <li>Start Playing</li>
      <li>
        <Link to="how-to-play">How To Play</Link>
      </li>
    </ul>
  </section>
);

export default Home;
