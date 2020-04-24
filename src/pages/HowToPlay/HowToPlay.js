import React from 'react';
import { Link } from '@reach/router';

const HowToPlay = () => (
  <Link data-test="go-back-home-link" to={`${process.env.PUBLIC_URL}/`}>
    Go Back
  </Link>
);

export default HowToPlay;
