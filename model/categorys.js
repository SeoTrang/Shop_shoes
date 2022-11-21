<<<<<<< HEAD
var mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const categorys = new Schema({
    name        :{type:String,required:true},
    createdAt   :{type:String,required:true},
    count       :{type:Number},
    booked      :{type:Number},
    temp        :{type:String},
    slug        :{type:String, slug:'name',unique:true}
});

=======
var mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const categorys = new Schema({
    name        :{type:String,required:true},
    createdAt   :{type:String,required:true},
    count       :{type:Number},
    booked      :{type:Number},
    temp        :{type:String},
    slug        :{type:String, slug:'name',unique:true}
});

>>>>>>> bbf8e4cb3a63354c4dadc95e587bbd7331ea4b20
module.exports = mongoose.model('categorys',categorys);