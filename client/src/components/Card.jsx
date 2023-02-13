import React from 'react';
import './Card.scss';
import { FaTrash } from "react-icons/fa";

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

      <div className='name-and-type-and-button'>
        <div className='fixedWidthDiv'></div>
        <div className='name-and-type'>
          <h2>{props.name}</h2>
          <p>{props.type}</p>
        </div>
        <div className='fixedWidthDiv'>
          <FaTrash
            role="button"
            tabIndex="0"
            size={24}
            color="#153D74"
            onClick={() => {
              props.handleDelete(props.id)
            }}
          />
        </div>
      </div>

    </div>
  );
}

export default Card;