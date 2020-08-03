// Creacion de la rutas 

const express = require('express');
const {control} = require('../controller/controller');

let router = express.Router();

router.get('/getdataprojects', control.getDataProjects);
router.post('/saveproject',control.postDataProject)





module.exports=router;

