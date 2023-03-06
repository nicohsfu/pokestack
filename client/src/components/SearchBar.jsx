import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ pokemon, setSearchResults, text, setText, handleSubmit}) => {

  const handleSearchChange = e => {
    if (!e.target.value) {
      return setSearchResults(pokemon);
    }
    setText(e.target.value);
    const resultsArray = pokemon.filter(item => item.name.includes(e.target.value));
    setSearchResults(resultsArray);
  };

  return (
    <header className='search-bar'>
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