// import React, { useState, useEffect } from 'react';
// import SearchBar from './SearchBar';
// import ListPage from './ListPage';
// import { getPokemon } from '../axios';
// import './Search.scss';
// import axios from 'axios';

// const Search = ({ fullRoster }) => {
//   const [pokemon, setPokemon] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [text, setText] = useState('');

//   useEffect(() => {
//     getPokemon().then(json => {
//       setPokemon(json.results);
//       setSearchResults(json.results);
//     });
//   }, []);

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!fullRoster) {
//       axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
//         .then(response => {
//           console.log(response);
//           const newPokemon = JSON.stringify({
//             name: text,
//             type: response.data.types.map(item => item.type.name),
//             frontImage: response.data.sprites.front_default,
//             backImage: response.data.sprites.back_default,
//             ability: response.data.abilities[0].ability.name,
//             hp: response.data.stats[0].base_stat,
//             attack: response.data.stats[1].base_stat,
//             defense: response.data.stats[2].base_stat,
//             specialAttack: response.data.stats[3].base_stat,
//             specialDefense: response.data.stats[4].base_stat,
//             speed: response.data.stats[5].base_stat
//           });

//           const customConfig = {
//             headers: {
//               'Content-Type': 'application/json'
//             }
//           };

//           axios.post('/pokemon', newPokemon, customConfig)
//             .then(() => setText(''));
//         })
//     } else {
//       alert('Your roster is full! You must first release some Pokemon to add more!');
//     }
//   }

//   const handleAutoComplete = (name) => {
//     setText(name);
//   }

//   return (
//     <div className='search'>
//       <SearchBar
//         pokemon={pokemon}
//         setSearchResults={setSearchResults}
//         fullRoster={fullRoster}
//         text={text}
//         setText={setText}
//         handleSubmit={handleSubmit}
//       />
//       <ListPage
//         searchResults={searchResults}
//         handleAutoComplete={handleAutoComplete}
//       />
//     </div>
//   );
// };

// export default Search;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ fullRoster }) => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  const [allSuggestions, setAllSuggestions] = useState('');
  
  useEffect(() => {
    // fetch all suggestions
    const fetchAllSuggestions = async () => {
      // make an API call to get all suggestions
      const response = await axios(`https://pokeapi.co/api/v2/pokemon?limit=1279&offset=0`);
      const data = response.data.results.map(item => item.name);
      setAllSuggestions(data);
    };
    fetchAllSuggestions();
  
    if (searchText) {
      // filter suggestions based on search text
      const filteredSuggestions = allSuggestions.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchText, allSuggestions]);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setSearchText(suggestion);
    setSuggestions([]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!fullRoster) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
              .then(response => {
                console.log(response);
                const newPokemon = JSON.stringify({
                  name: searchText,
                  type: response.data.types.map(item => item.type.name),
                  frontImage: response.data.sprites.front_default,
                  backImage: response.data.sprites.back_default,
                  ability: response.data.abilities[0].ability.name,
                  hp: response.data.stats[0].base_stat,
                  attack: response.data.stats[1].base_stat,
                  defense: response.data.stats[2].base_stat,
                  specialAttack: response.data.stats[3].base_stat,
                  specialDefense: response.data.stats[4].base_stat,
                  speed: response.data.stats[5].base_stat
                });
      
                const customConfig = {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
      
                axios.post('/pokemon', newPokemon, customConfig)
                  .then(() => setSearchText(''));
              })
          } else {
            alert('Your roster is full! You must first release some Pokemon to add more!');
          }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <input type="text" value={searchText} onChange={handleSearchTextChange} />
        <button type="submit">Search</button>
      </div>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
          ))}
        </ul>
      )}
      {selectedSuggestion && (
        <p>Selected pokemon: {selectedSuggestion}</p>
      )}
    </form>
  );
};

export default SearchBar;
