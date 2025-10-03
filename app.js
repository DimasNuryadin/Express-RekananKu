const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const methodOverride = require("method-override");
const session = require('express-session')
const flash = require('connect-flash')
const cors = require('cors')

// Admin
const adminRouter = express.Router();
const authAdminRouter = require('./app/admin/users/router');
const dashboardRouter = require('./app/admin/dashboard/router');
const calonRekananRouter = require('./app/admin/calon-rekanan/router');
const rekananRouter = require('./app/admin/rekanan/router');
const bukanRekananRouter = require('./app/admin/bukan-rekanan/router');

// API
const authRouter = require('./app/api/auth/router');
const dataPerusahaanRouter = require('./app/api/data-perusahaan/router');
const izinUsahaRouter = require('./app/api/izin-usaha/router');
const pemilikRouter = require('./app/api/pemilik/router');
const pengurusRouter = require('./app/api/pengurus/router');
const tenagaAhliRouter = require('./app/api/tenaga-ahli/router');
const statusRekananRouter = require('./app/api/status-rekanan/router');

const app = express();

app.use(cors())
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

// User Admin
adminRouter.use('/', authAdminRouter);
adminRouter.use('/dashboard', dashboardRouter);
adminRouter.use('/calon-rekanan', calonRekananRouter);
adminRouter.use('/rekanan', rekananRouter);
adminRouter.use('/bukan-rekanan', bukanRekananRouter);
app.use('/admin', adminRouter);

// API
app.use(`${URL}/auth`, authRouter);
app.use(`${URL}/data-perusahaan`, dataPerusahaanRouter);
app.use(`${URL}/izin-usaha`, izinUsahaRouter);
app.use(`${URL}/pemilik`, pemilikRouter);
app.use(`${URL}/pengurus`, pengurusRouter);
app.use(`${URL}/tenaga-ahli`, tenagaAhliRouter);
app.use(`${URL}/status-rekanan`, statusRekananRouter);

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
