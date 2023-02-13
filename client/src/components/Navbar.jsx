import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
      <div>
        <img
          className='pokestack-logo'
          src='https://i.imgur.com/h8vf1yd.png'
          alt='pokestack logo and logotype'
        />
      </div>

      <div className='nav-right-half'>
        <a href=''>Add Pokemon</a>
        <p>Logged in as: Ash</p>
      </div>
    </div>
  );
}

export default Navbar;