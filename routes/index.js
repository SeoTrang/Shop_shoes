
var adminRoute = require('./admin.route');
var clientRoute = require('./client.route');

function route(app) {
  app.use('/admin',adminRoute);
  app.use('/',clientRoute);
  
}



module.exports = route;
