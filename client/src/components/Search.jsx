import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ListPage from './ListPage';
import { getPokemon } from '../axios';
import './Search.scss';

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
    <div className='search'>
      <SearchBar
        pokemon={pokemon}
        setSearchResults={setSearchResults}
        fullRoster={fullRoster}
      />
      <ListPage searchResults={searchResults} />
    </div>
  );
};

export default Search;