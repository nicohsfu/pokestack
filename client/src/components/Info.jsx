import React from 'react';
import './Info.scss';
import { FaInfoCircle, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Info(props) {
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
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png"} alt="front view" />
          </div>
          <div>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/392.png"} alt="back view" />
          </div>
        </div>

        <div className='name-and-type-and-button'>

          <div className='name-and-type'>
            <h2>Infernape</h2>
            <p>fire | fighting</p>
            <p>Blaze</p>
          </div>

        </div>

        <div>
          <table>
            <tr>
              <td>HP</td>
              <td>44</td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>48</td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>65</td>
            </tr>
            <tr>
              <td>Special Attack</td>
              <td>65</td>
            </tr>
            <tr>
              <td>Special Defense</td>
              <td>64</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>43</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>314</td>
            </tr>
          </table>
        </div>

      </div>
    </>

  );
};

export default Info;