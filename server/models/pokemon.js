import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  type: {
    type: [String],
    required: true
  },

  frontImage: {
    type: String,
    required: true
  },

  backImage: {
    type: String,
    required: true
  },

  ability: {
    type: String,
    required: true
  },

  hp: {
    type: Number,
    required: true
  },

  attack: {
    type: Number,
    required: true
  },

  defense: {
    type: Number,
    required: true
  },

  specialAttack: {
    type: Number,
    required: true
  },

  specialDefense: {
    type: Number,
    required: true
  },

  speed: {
    type: Number,
    required: true
  }
});

export const Pokemon = mongoose.model('pokemon', pokemonSchema);