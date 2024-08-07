var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login');
var authRouter = require('./routes/auth');
var logoutRouter = require('./routes/logout');
var levelRouter = require('./routes/level');
var lessonRouter = require('./routes/lesson');
var studyRouter = require('./routes/study');
var signupmemberRouter = require('./routes/signupmember');
var reviewRouter = require('./routes/review');
var adminRouter = require('./routes/admin');

var app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000', // Địa chỉ của React app
  credentials: true, // Để cho phép gửi cookies
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/auth', authRouter);
app.use('/logout', logoutRouter);
app.use('/level', levelRouter);
app.use('/lesson', lessonRouter);
app.use('/study', studyRouter);
app.use('/signupmember', signupmemberRouter);
app.use('/review', reviewRouter);
app.use('/admin', adminRouter);
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
