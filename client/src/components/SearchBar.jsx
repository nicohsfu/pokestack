import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from "react-icons/fa";
import axios from 'axios';

const SearchBar = ({ pokemon, setSearchResults }) => {

  const handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`)
    .then(json => {
      console.log(json);
    })
  }

  const handleSearchChange = (e) => {
    if (!e.target.value) {
      return setSearchResults(pokemon);
    }
    const resultsArray = pokemon.filter(item => item.name.includes(e.target.value));
    setSearchResults(resultsArray);
  };

  return (
    <header>
      <form
        action='POST'
        method='/pokemon'
        onSubmit={handleSubmit}
      >
        Search:
        <input
          onChange={handleSearchChange}
        />
        <button>Submit</button>
      </form>
    </header>
  );
};

export default SearchBar;