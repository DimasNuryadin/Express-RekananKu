const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const methodOverride = require("method-override");
const session = require('express-session')
const flash = require('connect-flash')


const dashboardRouter = require('./app/dashboard/router');
const calonRekananRouter = require('./app/calon-rekanan/router');
const rekananRouter = require('./app/rekanan/router');
const bukanRekananRouter = require('./app/bukan-rekanan/router');

// API
const dataPerusahaanRouter = require('./app/data-perusahaan/router');
const izinUsahaRouter = require('./app/izin-usaha/router');
const pemilikRouter = require('./app/pemilik/router');
const pengurusRouter = require('./app/pengurus/router');
const tenagaAhliRouter = require('./app/tenaga-ahli/router');
const usersRouter = require('./app/users/router');
const playerRouter = require('./app/player/router');

const app = express();
const URL = `/api/v1`;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))
app.use(flash());
app.use(methodOverride("_method"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/adminlte', express.static(path.join(__dirname, '/node_modules/admin-lte')))

app.use('/dashboard', dashboardRouter);
app.use('/calon-rekanan', calonRekananRouter);
app.use('/rekanan', rekananRouter);
app.use('/bukan-rekanan', bukanRekananRouter);

app.use('/data-perusahaan', dataPerusahaanRouter);
app.use('/izin-usaha', izinUsahaRouter);
app.use('/pemilik', pemilikRouter);
app.use('/pengurus', pengurusRouter);
app.use('/tenaga-ahli', tenagaAhliRouter);
// User Admin
app.use('/', usersRouter);

// API
app.use(`${URL}/players`, playerRouter);

// catch 404 and forward to error handler
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

module.exports = app;
