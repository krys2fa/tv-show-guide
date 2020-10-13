import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex">
    <NavLink to="/" className="logo">
      TV Show Guide
    </NavLink>
    <ul className="right">
      <li>
        <i className="fa fa-user" />
      </li>
    </ul>
  </nav>
);

export default Navbar;
