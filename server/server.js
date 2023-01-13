import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import trainerRoutes from './routes/trainers.js';
import pokemonRoutes from './routes/pokemon.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use('/trainers', trainerRoutes);
app.use('/pokemon', pokemonRoutes);

app.use(bodyParser.json({
  limit: "30mb",
  extended: true
}));

app.use(bodyParser.urlencoded({
  limit: "30mb",
  extended: true
}));

app.use(cors);

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@pokestackcluster.mihvrie.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
  .catch(error => console.log(error.message));

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});