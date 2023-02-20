import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Info.scss';
import axios from 'axios';

function Info(props) {
  const [loadedPokemon, setLoadedPokemon] = useState({});

  useEffect(() => {
    generateInfo(props.id);
  });

  const generateInfo = async (id) => {
    try {
      const pokemonInfo = await axios.get(`/pokemon/${id}`);
      setLoadedPokemon(pokemonInfo.data);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    _id,
    name,
    type,
    frontImage,
    backImage,
    ability,
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed
  } = loadedPokemon;

  const totalStat = hp + attack + defense + specialAttack + specialDefense + speed;

  return (
    // RENAME CSS CLASSES
    <div className='info'>
      <div className='info-card'>

        <div className='front-and-back-views'>
          <div>
            <img src={frontImage} alt="front view" />
          </div>
          <div>
            <img src={backImage} alt="back view" />
          </div>
        </div>

        <div className='name-and-type-and-button'>

          <div className='name-and-type'>
            <h2>{name}</h2>
            {/* <p>{Object.keys(type).length > 1 ?
                `${type["01"]} | ${type["02"]}` :
                `${type["01"]}`}</p> */}
            <p>{type}</p>
            <p>{ability}</p>
          </div>

        </div>

        <div>
          <table>
            <tbody>
              <tr>
                <td>HP</td>
                <td>{hp}</td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>{attack}</td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>{defense}</td>
              </tr>
              <tr>
                <td>Special Attack</td>
                <td>{specialAttack}</td>
              </tr>
              <tr>
                <td>Special Defense</td>
                <td>{specialDefense}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{speed}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{totalStat}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      <div>
        <Link to="/">
          <button className='back-to-roster-button'>
            <p>Back to Roster</p>
          </button>
        </Link>
        <br /><br />
      </div>
    </div>

  );
};

export default Info;