var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});

// Requerir las rutas 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/project');

// Usar las rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productsRouter);

// app.listen(3000, function() {
  // console.log('Aplicación ejemplo, escuchando el puerto 3000!');
// });

module.exports = app; 