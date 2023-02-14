import axios from 'axios';

export const getPokemon = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1279&offset=0');
  console.log(response.data);
  return response.data;
}