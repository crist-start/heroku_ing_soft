var mongoose = require('mongoose');
var schema = mongoose.Schema;
var marvelSchema =schema(
  {
    id:Number,
    nombre:String,
    poder:String,
    alias:String,
    conCapa:Boolean,
    imagen:String,
    villano:Boolean
  }
);

module.exports=mongoose.model('Marvel',marvelSchema);
