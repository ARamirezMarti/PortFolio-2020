// Creacion de la rutas 

const express = require('express');
const {control} = require('../controller/controller');

let router = express.Router();

// Project Routes
router.get('/getdataprojects', control.getDataProjects);
router.post('/saveproject',control.postDataProject);
router.get('/getimage/:image',control.getimage);
// Form Routes
router.post('/sendform',control.contacForm);





module.exports=router;

