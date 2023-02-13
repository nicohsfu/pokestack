import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.scss';
import './index.scss';

function App() {
  const [pokemonCards, setPokemonCards] = useState([]);

  useEffect(() => {
    axios.get('/pokemon')
      .then(result => {
        setPokemonCards(result.data.map((pokemon, index) => {
          return (
            <Card
              key={index}
              frontImage={pokemon.frontImage}
              backImage={pokemon.backImage}
              name={pokemon.name}
              type={pokemon.type.length > 1 ?
                `${pokemon.type[0]} | ${pokemon.type[1]}` :
                `${pokemon.type[0]}`
              }
            />
          );
        }));
      });
  }, [pokemonCards]);

  return (
    <div className='app'>
      <Navbar />

      <div className='cards'>
        {pokemonCards}
      </div>

    </div>
  );
}

export default App;