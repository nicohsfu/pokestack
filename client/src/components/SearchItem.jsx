import React from 'react';
import './SearchItem.scss';

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