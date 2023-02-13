import React from 'react';
import './Card.scss';

function Card(props) {
  return (
    <div className='card'>

      <div className='front-and-back-views'>
        <div>
          <img src={props.frontImage} alt="front view" />
        </div>
        <div>
          <img src={props.backImage} alt="back view" />
        </div>
      </div>

      <div className='name-and-type'>
        <h2>{props.name}</h2>
        <p>{props.type}</p>
      </div>
      
    </div>
  );
}

export default Card;