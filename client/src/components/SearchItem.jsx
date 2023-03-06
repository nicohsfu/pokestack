import React from 'react';

const SearchItem = ({ name, handleAutoComplete }) => {
  return (
    <div className='search-item'>
      <article
        onClick={() => handleAutoComplete(name)}
      >{name}</article>
    </div>
  );
};

export default SearchItem;