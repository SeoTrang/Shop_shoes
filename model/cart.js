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

module.exports = mongoose.model('carts',carts);