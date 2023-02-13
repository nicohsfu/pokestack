import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import trainerRoutes from './routes/trainers.js';
import pokemonRoutes from './routes/pokemon.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use('/trainers', trainerRoutes);
app.use('/pokemon', pokemonRoutes);

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@pokestackcluster.mihvrie.mongodb.net/pokestack?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true}, () => {
  console.log('Connection to database has been established');
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})