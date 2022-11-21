<<<<<<< HEAD
var mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const carts = new Schema({
    idUser      :String,
    idProducts  :[String],
    createdAt   :{type:String,required:true},
    count       :[Number]
});

=======
var mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const carts = new Schema({
    idUser      :String,
    idProducts  :[String],
    createdAt   :{type:String,required:true},
    count       :[Number]
});

>>>>>>> bbf8e4cb3a63354c4dadc95e587bbd7331ea4b20
module.exports = mongoose.model('carts',carts);