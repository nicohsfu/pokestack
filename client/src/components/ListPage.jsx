import React from 'react';
import SearchItem from './SearchItem';

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((pokemon, index) => <SearchItem key={index} name={pokemon.name}/>);

  const content = results.length ? results : <article><p>No Matching Pokemon</p></article>;

  return (
    <>
      <main>{content}</main>
    </>
  );
};

export default ListPage;