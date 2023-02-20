import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ListPage from './ListPage';
import { getPokemon } from '../axios';

const Search = ({ fullRoster }) => {
  const [pokemon, setPokemon] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPokemon().then(json => {
      setPokemon(json.results);
      setSearchResults(json.results);
    });
  }, []);

  return (
    <>
      <SearchBar
        pokemon={pokemon}
        setSearchResults={setSearchResults}
        fullRoster={fullRoster}
      />
      <ListPage searchResults={searchResults} />
    </>
  );
};

export default Search;