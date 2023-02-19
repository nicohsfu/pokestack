import React, { useState, useEffect } from 'react';
import './Info.scss';
import { FaInfoCircle, FaTrash } from "react-icons/fa";
import axios from 'axios';

function Info(props) {
  const [loadedPokemon, setLoadedPokemon] = useState({});

  useEffect(() => {
    generateInfo(props.id)
  })
  
  const generateInfo = async (id) => {
    try {
      const pokemonInfo = await axios.get(`/pokemon/${props.id}`);
      setLoadedPokemon(pokemonInfo.data);
    } catch (error) {
      console.log(error);
    }
  };


  // const {
  //   _id,
  //   name,
  //   type,
  //   frontImage,
  //   backImage,
  //   ability,
  //   hp,
  //   attack,
  //   defense,
  //   specialAttack,
  //   specialDefense,
  //   speed
  // }

  const totalStat = loadedPokemon.hp + loadedPokemon.attack + loadedPokemon.defense + loadedPokemon.specialAttack + loadedPokemon.specialDefense + loadedPokemon.speed;

  return (
    // RENAME CSS CLASSES
    <>
      <div>
        <button>
          Back to Roster
        </button>
        <br /><br />
      </div>
      <div className='card'>

        <div className='front-and-back-views'>
          <div>
            <img src={loadedPokemon.frontImage} alt="front view" />
          </div>
          <div>
            <img src={loadedPokemon.backImage} alt="back view" />
          </div>
        </div>

        <div className='name-and-type-and-button'>

          <div className='name-and-type'>
            <h2>{loadedPokemon.name}</h2>
            <p>{loadedPokemon.type}</p>
            <p>{loadedPokemon.ability}</p>
          </div>

        </div>

        <div>
          <table>
            <tr>
              <td>HP</td>
              <td>{loadedPokemon.hp}</td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>{loadedPokemon.attack}</td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>{loadedPokemon.defense}</td>
            </tr>
            <tr>
              <td>Special Attack</td>
              <td>{loadedPokemon.specialAttack}</td>
            </tr>
            <tr>
              <td>Special Defense</td>
              <td>{loadedPokemon.specialDefense}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{loadedPokemon.speed}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{totalStat}</td>
            </tr>
          </table>
        </div>

      </div>
    </>

  );
};

export default Info;