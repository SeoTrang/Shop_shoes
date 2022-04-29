var mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const users = new Schema({
    name        :{type:String,required:true},
    avatar      :{type:String},
    email       :{type:String,required:true},
    phone       :{type:String,required:true},
    pass        :{type:String,required:true},
    createdAt   :{type:String,required:true},
    booked      :{type:String},
    role        :{type:String},
    temp        :{type:String},
    slug        :{type:String, slug:'name',unique:true}
});

module.exports = mongoose.model('users',users);