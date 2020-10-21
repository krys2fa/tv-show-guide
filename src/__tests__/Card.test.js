import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/Card/Card';

it('renders the Card component correctly', () => {
  const show = {
    name: 'test',
    rating: { average: '6' },
  };
  const { asFragment } = render(<Card show={show} />);
  expect(asFragment()).toMatchSnapshot();
});
