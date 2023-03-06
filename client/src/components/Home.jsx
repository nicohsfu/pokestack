import React, { useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import './Home.scss';

const Home = ({ setSelectedPokemon, pokemonCards, setPokemonCards }) => {

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
              setSelectedPokemon={setSelectedPokemon}
            />
          );
        }));
      });
  }, [pokemonCards]);

  return (
    <div className='home'>
      <h1>Your Team</h1>
      <h2 className='subheader'>Roster: {pokemonCards.length} / 6</h2>
      <div className='cards'>
        {pokemonCards.length ? pokemonCards : <div className='no-pokemon-message'><p>Your team is empty!</p></div>}
      </div>
    </div>
  );
};

export default Home;