const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let form = new Schema({
    name:String,
    company:String,
    email:String,
    telephone:Number,
    message:String

});

module.exports= mongoose.model('Form',form);