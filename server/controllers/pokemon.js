import { Pokemon } from '../models/pokemon.js';

export const getPokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.find();
    res.json(pokemon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addPokemon = async (req, res) => {
  const pokemon = new Pokemon({
    name: req.body.name,
    type: req.body.type,
    frontImage: req.body.frontImage,
    backImage: req.body.backImage,
    ability: req.body.ability,
    hp: req.body.hp,
    attack: req.body.attack,
    defense: req.body.defense,
    specialAttack: req.body.specialAttack,
    specialDefense: req.body.specialDefense,
    speed: req.body.speed
  });

  try {
    const newPokemon = await pokemon.save();
    res.status(201).json(newPokemon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const releasePokemon = async (req, res) => {
  
};