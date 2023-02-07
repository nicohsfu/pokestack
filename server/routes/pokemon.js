import express from 'express';
import { getPokemon, getIndividualPokemon, addPokemon, releasePokemon } from '../controllers/pokemon.js';

const router = express.Router();

router.get('/', getPokemon);

router.get('/:id', getIndividualPokemon);

router.post('/', addPokemon);

router.delete('/:id', releasePokemon);

export default router;