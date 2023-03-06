import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ pokemon, setSearchResults, text, setText, handleSubmit }) => {

  const handleSearchChange = e => {
    if (!e.target.value) {
      return setSearchResults(pokemon);
    }
    setText(e.target.value);
    const resultsArray = pokemon.filter(item => item.name.includes(e.target.value));
    setSearchResults(resultsArray);
  };

  return (
    <div>
      <form
        action='POST'
        method='/pokemon'
        onSubmit={e => handleSubmit(e)}
        className='search-bar'
      >
        <div className='gap'>
          <div>
            Search:
          </div>
          <div>
            <input
              value={text}
              onChange={e => handleSearchChange(e)}
            />
          </div>
        </div>
        <div>
          <button class='submit-button'>Add Pokemon</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;