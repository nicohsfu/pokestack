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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  );
}

export default App;