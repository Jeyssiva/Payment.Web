var express = require('express');
var app = express();
var compression = require('compression')
var indexRouter = require('./src/routers/indexRouter')
const path = require('path')
var bodyParser = require('body-parser')
const expressValidator = require('express-validator');

// compressing can greatly decrease the size of the response body and hence increase the speed of a web app 
//it creates the issue. Do not use
// app.use(compression)

app.use(express.json())
app.use('/' , indexRouter)

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator()) //used for checkBody() functions

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', { error: res.locals.error });
    res.status(404);
    // res.render('fournotfour',{}); 
});

module.exports = app