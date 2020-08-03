//schema de mongoose

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let project = new Schema({
    projectName:String,
    description:String,
    date:{type:Date, default:Date.now},
    langs:String,
    image:String,
});




module.exports= mongoose.model('Project',project);
