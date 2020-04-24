import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';

describe('(Component) Home ', () => {
  test('Should have a link to how to play', () => {
    const { getByText } = render(<Home />);

    getByText(/how to play/i, {
      selector: 'a',
    });
  });
});
