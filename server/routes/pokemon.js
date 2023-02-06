import express from 'express';
import { getPokemon, addPokemon, releasePokemon } from '../controllers/pokemon.js';

const router = express.Router();

router.get('/', getPokemon);

router.post('/', addPokemon);

router.delete('/:id', releasePokemon);

export default router;