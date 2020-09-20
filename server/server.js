const express = require('express');
require('dotenv').config()
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

let app = express();

 app.use(cors({
    origin:true,
    methods:["GET","PUT","POST","DELETE"],
    allowedHeaders:['Authorization, X-API-KEY, application/json ,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method','text/plain']
}));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 

  

app.use( express.static(path.resolve(__dirname+'/public')));
app.use('/api',require(path.join(__dirname,'./routes/projects.routes')));

app.use(morgan('dev'));

const mongoDeprecation={
    useNewUrlParser:true,
    useUnifiedTopology: true
}
//process.env.MONGO_DB
mongoose.connect(process.env.MONGO_DB,mongoDeprecation,(err,res)=>{
        if(err) throw err;

        console.log('Connected to database');

        app.listen(process.env.PORT|| 3500,()=>{
            console.log(`Server listening on port ${process.env.PORT || 3500}`);
        })
        

});


