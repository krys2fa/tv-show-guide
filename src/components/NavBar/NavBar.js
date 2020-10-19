import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link
      to="/"
      style={{
        marginLeft: '50px',
        fontSize: '40px',
        fontWeight: 'bold',
        fontFamily: 'Dancing Script, cursive',
      }}
    >
      Cars Show Guide
    </Link>
  </nav>
);

export default Navbar;
