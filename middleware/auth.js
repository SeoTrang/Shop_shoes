var jwt = require('jsonwebtoken');

function chekedsigned (req,res,next){
    try {
      // res.json('da vao!!!!!!!!!!')
      var token  = req.cookies.token;
      var signed = jwt.verify(token,'jwt');
  
      // console.log(signed._id)
      // res.json("hello1")
      if(signed){
        res.cookie('_id',signed._id, { maxAge: 24*60*60*1000, httpOnly: true })
        next();
      }
    } catch (error) {
      // res.redirect(301,'/sign-in');
      res.json("loi")
    }
  }

  module.exports = chekedsigned;