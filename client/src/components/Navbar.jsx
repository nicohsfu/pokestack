import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
      {/* <h1>POKESTACK</h1> */}
      <img
        className='pokestack-logo'
        src='https://i.imgur.com/YrlmBrz.png'
        alt='pokestack logo'
      />

      <div className='nav-right-half'>
        <a href=''>Add Pokemon</a>
        <p>Logged in as: Ash</p>
      </div>
    </div>
  );
}

export default Navbar;