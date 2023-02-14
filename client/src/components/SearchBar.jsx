import React, { useState } from'react';
import axios from 'axios';

const SearchBar = ({ pokemon, setSearchResults }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
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
  }

  const handleSearchChange = e => {
    if (!e.target.value) {
      return setSearchResults(pokemon);
    }
    setText(e.target.value);
    const resultsArray = pokemon.filter(item => item.name.includes(e.target.value));
    setSearchResults(resultsArray);
  };

  return (
    <header>
      <form
        action='POST'
        method='/pokemon'
        onSubmit={e => handleSubmit(e)}
      >
        Search:
        <input
          value={text}
          onChange={e => handleSearchChange(e)}
        />
        <button>Submit</button>
      </form>
    </header>
  );
};

export default SearchBar;