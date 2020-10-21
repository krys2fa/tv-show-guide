import React from 'react';
import { render } from '@testing-library/react';
import Filter from '../components/Filter/Filter';

it('renders the Filter component correctly', () => {
  const params = {
    fetchedShows: [],
    filter: 'All',
  };
  const { asFragment } = render(<Filter params={params} />);
  expect(asFragment()).toMatchSnapshot();
});
