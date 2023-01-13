import React from 'react';
import './Card.scss';

function Card(props) {
  return (
    <div className='card'>

      <div className='front-and-back-views'>
        <div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="front view" />
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png" alt="back view" />
        </div>
      </div>

      <div className='name-and-type'>
        <h2>Squirtle</h2>
        <p>Water</p>
      </div>
      
    </div>
  );
}

export default Card;