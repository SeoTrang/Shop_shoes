var jwt = require('jsonwebtoken');

function chekedsigned (req,res,next){
    try {
      // console.log('da vao!!!!!!!!!!')
      var token  = req.cookies.token;
      var signed = jwt.verify(token,'jwt');
  
      // console.log(signed._id)
      if(signed){
        res.cookie('_id',signed._id, { maxAge: 24*60*60*1000, httpOnly: true })
        next();
      }
    } catch (error) {
      res.redirect('/sign-in');
    }
  }

  module.exports = chekedsigned;