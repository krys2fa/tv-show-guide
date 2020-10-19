import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

describe('render NavBar with link correctly', () => {
  it('should match with snapshot', () => {
    const tree = render(<BrowserRouter><NavBar /></BrowserRouter>); expect(tree).toMatchSnapshot();
  });
});
