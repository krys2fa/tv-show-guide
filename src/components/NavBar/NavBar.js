import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavLink
      to="/"
      activeStyle={{
        marginLeft: '50px',
        fontSize: '40px',
        fontWeight: 'bold',
        fontFamily: 'Dancing Script, cursive',
      }}>
      Cars Show Guide
    </NavLink>
  </nav>
);

export default Navbar;
