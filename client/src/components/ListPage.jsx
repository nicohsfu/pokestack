import React from 'react';
import Pokemon from './Pokemon';

const ListPage = ({ searchResults }) => {
  let results = searchResults.map((pokemon, index) => <article>{pokemon.name}</article>);
  console.log("results", results);

  return (
    <>
      {results}
    </>
  );
};

export default ListPage;