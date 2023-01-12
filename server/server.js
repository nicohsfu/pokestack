const express = require('express');
const app = express();
const PORT = 8000;

const trainersRouter = require('./routes/trainers');
const pokemonRouter = require('./routes/pokemon');

app.use('/trainers', trainersRouter);
app.use('/pokemon', pokemonRouter);

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

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

module.exports = app;