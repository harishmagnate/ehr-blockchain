import express, { json, urlencoded } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import loginRouter from './routes/login';
import patientRouter from './routes/patient';
import doctorRouter from './routes/doctor';

const app = express();
const createError = require('http-errors');

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

let corsOptions = {
  origin: ['http://localhost:3000'],
}

app.use(cors(corsOptions))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/patient', patientRouter);
app.use('/doctor', doctorRouter);

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

/* istanbul ignore next */
if (!module.parent) {
  const port = 5000
  app.listen(port, function () {
    console.log('EHR Service app listening on port ' + port + '!');
  });  
}

export default app;
