import React from 'react';

const SearchItem = ({ name }) => {
  return (
    <div className='search-item'>
      <article>{name}</article>
    </div>
  );
};

export default SearchItem;