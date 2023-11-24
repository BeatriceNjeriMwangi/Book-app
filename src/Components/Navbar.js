
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import '../styles/bookslist.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
        Books
      </Link>
      <Link to="/cart" className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`}>
        ShoppingCart
      </Link>
    </nav>
  );
};

export default Navbar;
