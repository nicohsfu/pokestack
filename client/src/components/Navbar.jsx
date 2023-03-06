import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>

      <Link to="/">
        <div>
          <img
            className='pokestack-logo'
            src='https://i.imgur.com/h8vf1yd.png'
            alt='pokestack logo and logotype'
          />
        </div>
      </Link>

      <div className='nav-right-half'>
        <Link to="/search">
          Add Pokemon
        </Link>
        <p>Logged in as: Ash</p>
      </div>
    </div>
  );
}

export default Navbar;