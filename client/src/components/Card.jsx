import React from 'react';
import './Card.scss';
import { FaInfoCircle, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
        <div className='fixedWidthDiv'>
          <Link to="/info">
            <FaInfoCircle
              role="button"
              tabIndex="0"
              size={24}
              color="#153D74"
            />
          </Link>
        </div>
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
              props.handleDelete(props.id);
            }}
          />
        </div>
      </div>


    </div>
  );
}

export default Card;