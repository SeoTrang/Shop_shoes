var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var morgan = require('morgan')

 

var router = require('./routes');

const { create } = require("express-handlebars");
const res = require('express/lib/response');


const app = express();
var port = 8001;

// connect database
var db = require('./config/db');

db.connect();



const hbs = create({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: `hbs`,
    // defaultLayout: 'main',
    partialsDir: `${__dirname}/views/partials`
});

app.engine('hbs', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// morgan

// app.use(morgan('combined'))

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/admin",express.static(path.join(__dirname, 'public')));
app.use("/detail",express.static(path.join(__dirname, 'public')));
app.use("/check-order",express.static(path.join(__dirname, 'public')));

app.use("/admin/update-product",express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public')));



router(app);

// app.get('/home',(req,res,next)=>{
//   res.json('abc');
// });


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})
