import React from 'react';
import { Link } from '@reach/router';
import classes from './styles/Home.module.scss';

const Home = () => (
  <section>
    <header className={classes.title}>
      <h1 className={classes.pageTitle}>Love Letter</h1>
      <h2>6-player version</h2>
    </header>
    <ul className={classes.headerLines}>
      <li>Start Playing</li>
      <li>
        <Link data-test="how-to-play-link" to="how-to-play">
          How To Play
        </Link>
      </li>
    </ul>
  </section>
);

export default Home;
