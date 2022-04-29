var mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const orders = new Schema({
    customerName    :{type:String,required:true},
    customerAddress :{type:String},
    customerPhone   :{type:String},
    customerEmail   :{type:String},
    createdAt       :{type:String,required:true},
    count           :{type:[String]},
    state           :{type:Number},
    idProducts      :{type:[String]},
    idUser          :{type:String},
    temp1           :{type:String},
    nameProducts    :{type:[String]},
    slug            :{type:String, slug:'customerName',unique:true}
});

module.exports = mongoose.model('orders',orders);