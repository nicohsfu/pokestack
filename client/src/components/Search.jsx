import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ListPage from './ListPage';
import { getPokemon } from '../axios';
import './Search.scss';
import axios from 'axios';

const Search = ({ fullRoster }) => {
  const [pokemon, setPokemon] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    getPokemon().then(json => {
      setPokemon(json.results);
      setSearchResults(json.results);
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!fullRoster) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
        .then(response => {

          const newPokemon = JSON.stringify({
            name: text,
            type: response.data.types.map(item => item.type.name),
            frontImage: response.data.sprites.front_default,
            backImage: response.data.sprites.back_default,
            ability: response.data.abilities[0].ability.name,
            hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            specialAttack: response.data.stats[3].base_stat,
            specialDefense: response.data.stats[4].base_stat,
            speed: response.data.stats[5].base_stat
          });

          const customConfig = {
            headers: {
              'Content-Type': 'application/json'
            }
          };

          axios.post('/pokemon', newPokemon, customConfig)
            .then(() => setText(''));
        })
    } else {
      alert('Your roster is full! You must first release some Pokemon to add more!');
    }
  }

  const handleAutoComplete = (name) => {
    setText(name);
  }

  return (
    <div className='search'>
      <SearchBar
        pokemon={pokemon}
        setSearchResults={setSearchResults}
        fullRoster={fullRoster}
        text={text}
        setText={setText}
        handleSubmit={handleSubmit}
      />
      <ListPage
        searchResults={searchResults}
        handleAutoComplete={handleAutoComplete}
      />
    </div>
  );
};

export default Search;