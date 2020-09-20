//schema de mongoose

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let project = new Schema({
    projectName:String,
    description:String,
    date: String,
    langs:String,
    image:String,
});


const normalDate =() =>{
    let date = new Date();
    
    return `${date.getDay}/${date.getMonth}/${date.getFullYear}`
    
    
}


module.exports= mongoose.model('Project',project);
