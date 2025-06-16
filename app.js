var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itemsRouter = require('./routes/items');
const apiItemsRouter = require('./routes/api.items');
const apiAuthRouter = require('./routes/api.auth');
const { swaggerUi, specs } = require('./swagger');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// HTML routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items/', itemsRouter);

// ✅ API routes PHẢI TRƯỚC 404
app.use('/api/items', apiItemsRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// catch 404 - PHẢI ĐỂ SAU CÙNG
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Connect DB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tinhminh744:Vominhtinh1@codekhoahoc.cpzvcpt.mongodb.net/codekhoahoc')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

module.exports = app;
