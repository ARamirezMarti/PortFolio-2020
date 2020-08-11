// Creacion de la rutas 

const express = require('express');
const {control} = require('../controller/controller');
const {verificationToken} = require('../middleware/verification');


let router = express.Router();
// index
router.get('/', (req, res)=>{
    
    res.sendFile(path.resolve(__dirname+'../public/index.html'));
    
});

//TOKEN
router.get('/user/:id',control.getToken);

// Project Routes
router.get('/getdataprojects',verificationToken,control.getDataProjects);
router.post('/saveproject',control.postDataProject);
router.get('/getimage/:image',control.getimage);
router.delete('/deleteproject/:id',verificationToken,control.deleteProject);

// Form Routes
router.post('/sendform',control.contacForm);






module.exports=router;

