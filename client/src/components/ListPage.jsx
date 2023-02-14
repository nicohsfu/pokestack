import React from 'react';

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((pokemon, index) => <article key={index}>{pokemon.name}</article>);

  const content = results.length ? results : <article><p>No Matching Pokemon</p></article>

  return (
    <>
      <main>{content}</main>
    </>
  );
};

export default ListPage;