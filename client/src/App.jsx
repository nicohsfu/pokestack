import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.scss';
import './index.scss';

function App() {
  const [pokemonCards, setPokemonCards] = useState([]);

  const handleDelete = (id) => {
    const filteredPokemon = pokemonCards.filter(pokemon => pokemon.id !== id);
    setPokemonCards(filteredPokemon);
    axios.delete(`/pokemon/${id}`)
      .then(result => console.log("deleted item", result));
  };

  useEffect(() => {
    axios.get('/pokemon')
      .then(result => {
        setPokemonCards(result.data.map((pokemon, index) => {
          return (
            <Card
              key={index}
              id={pokemon._id}
              frontImage={pokemon.frontImage}
              backImage={pokemon.backImage}
              name={pokemon.name}
              type={pokemon.type.length > 1 ?
                `${pokemon.type[0]} | ${pokemon.type[1]}` :
                `${pokemon.type[0]}`
              }
              handleDelete={handleDelete}
            />
          );
        }));
      });
  }, [pokemonCards]);

  return (
    <div className='app'>
      <Navbar />

      <h1>Your Team</h1>
      <h2 className='subheader'>Roster: {pokemonCards.length} / 6</h2>

      <div className='cards'>
        {pokemonCards}
      </div>
    </div>
  );
}

export default App;