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
        setPokemonCards(result.data.map(pokemon => {
          <Card 
            frontImage={pokemon.frontImage}
            backImage={pokemon.backImage}
            name={pokemon.name}
            type={pokemon.type}
          />
        }))
      });
  }, [pokemonCards]);

  return (
    <div className='app'>
      <Navbar />
      
      <div className='cards'>
        <Card name="Squirtle" type="Water" frontURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" rearURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png"/>
        <Card name="Ivysaur" type="Grass" frontURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" rearURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"/>
        <Card name="Charizard" type="Fire | Flying" frontURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" rearURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png"/>

      </div>

    </div>
  );
}

export default App;