const mongoose = require('mongoose');

let Schema = new mongoose.Schema;
let form = new Schema({
    name:String,
    company:String,
    email:String,
    telephone:Number,

});

module.exports= mongoose.model('Form',form);