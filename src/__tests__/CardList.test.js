import React from 'react';
import { render } from '@testing-library/react';
import CardList from '../components/CardList/CardList';

it('renders the CardList component correctly', () => {
  const params = {
    fetchedShows: [],
    filter: 'All',
  };
  const { asFragment } = render(<CardList params={params} />);
  expect(asFragment()).toMatchSnapshot();
});
