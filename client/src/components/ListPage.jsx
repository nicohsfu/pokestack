import React from 'react';
import SearchItem from './SearchItem';

const ListPage = ({ searchResults, handleAutoComplete }) => {
  const results = searchResults.map((pokemon, index) => <SearchItem key={index} name={pokemon.name} handleAutoComplete={handleAutoComplete} />);

  const content = results.length ? results : <article><p>No Matching Pokemon</p></article>;

  return (
    <>
      <main>{content}</main>
    </>
  );
};

export default ListPage;