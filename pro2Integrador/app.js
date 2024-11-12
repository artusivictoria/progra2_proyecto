var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//definimos session aka Requerir express-session en el entry point de la aplicación (app.js)
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let mercadoRouter = require('./routes/mercado');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//justo antes de las rutas -- session
//Ejecutamos session() pasándole como argumento un objeto literal con la propiedad  secret  con un texto único aleatorio, que servirá para identificar nuestro sitio web.
app.use(session({
  secret: "mercadoProyecto", // hash para un usuario  
  resave: false,
  saveUninitialized: true
}));
      //obs. Implementar Session también deja disponible req.session aka una nueva propiedad dentro del objeto request que está accesible en todo el sitio.

//La asignación de datos a res.locals debe estar dentro del archivo app.js antes de la declaración de las rutas. 
/*hacmeos un pasamano de la info de session se la enviaos a locals */
app.use(function(req, res, next){
  if (req.session.user !=undefined) {   //req.session.user !=undefined es true quiere decir que hay algo guardado
    res.locals.user= req.session.user  //res.locals es un objeto literal donde puedo almacenar todos los valores que quieran compartir con todas las vistas
  }
  return next();
})
//obs. con todo esto de sesion luego podes hacer lo de partials de si esta logeado o no mostrar un difernte header ocmo hice en login

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/producto', mercadoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
