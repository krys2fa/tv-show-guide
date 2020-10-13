import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="">
    <Link to="/" className="logo">
      TV Show Guide
    </Link>
    <div className="user">
      <i className="fa fa-user" />
    </div>
  </nav>
);

export default Navbar;
