import React from 'react';
import './SearchItem.scss';

const SearchItem = ({ name, handleAutoComplete }) => {
  return (
    <div className='search-item'>
      <article
        onClick={e => handleAutoComplete(e, name)}
      >{name}</article>
    </div>
  );
};

export default SearchItem;