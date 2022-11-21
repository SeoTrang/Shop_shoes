<<<<<<< HEAD
var mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const products = new Schema({
    name        :{type:String,required:true},
    createdAt   :{type:String,required:true},
    count       :{type:Number},
    booked      :{type:Number},
    priceOld    :{type:String,required:true},
    price       :{type:String,required:true},
    idCategory  :{type:String,required:true},
    size        :{type:[String],required:true},
    img         :String,
    promo       :Number,
    temp        :{type:String},
    slug        :{type:String, slug:'name',unique:true}
});


=======
var mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const products = new Schema({
    name        :{type:String,required:true},
    createdAt   :{type:String,required:true},
    count       :{type:Number},
    booked      :{type:Number},
    priceOld    :{type:String,required:true},
    price       :{type:String,required:true},
    idCategory  :{type:String,required:true},
    size        :{type:[String],required:true},
    img         :String,
    promo       :Number,
    temp        :{type:String},
    slug        :{type:String, slug:'name',unique:true}
});

>>>>>>> bbf8e4cb3a63354c4dadc95e587bbd7331ea4b20
module.exports = mongoose.model('products',products);