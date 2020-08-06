'use strict'
const Project = require('../model/project');
const Form = require('../model/form');
const fs = require('fs');
const path = require('path');
const {emailer} = require('./emailer');

var control = {

    getDataProjects : function (req,res)  {

        Project.find({})
                .sort('date')
                .exec((err,project)=>{
                    if(err){
                        res.status(400).json({
                            err
                        })
                    }
                   res.status(200).json({
                       
                       project
                   });

                }); 
 
    },

    postDataProject: (req,res)=>{
        let body = req.body;        
        let image =  req.files.image;
        let path = `./uploads/${image.name}`;
        let dateNow = new  Date();
        
            image.mv(path,(err)=>{
                if(err){res.send(err)}
                console.log("Photo uploaded");
            })
        
         let project = new Project({
            projectName:body.name,
            description:body.description,
            langs:body.langs,
            date:body.date,
            image:image.name,
        });

        project.save((err,projectSaved)=>{
            if(err){
                res.status(400).json({
                    ok:false,
                    err
                });
            }

            res.status(201).json({
                ok:true,                
                projectSaved
            });

        });
             
    },

    getimage: function(req,res){
        // Le pasaremos por parametros el nombre de la imagen
        var file = req.params.image;
        console.log(file);
        // La concatenamos con el path donde estan
        var path_file = `./uploads/${file}` 
        console.log(path_file);
        // Verificamos que exista esa imagen
        fs.exists(path_file, (exists)=>{
            if(exists){  
                // Si existe, devolvemos el path              
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).json({
                    message: "No existe la imagen"
                })
            }
        });  

    },

    contacForm:function(req,res){
        let body =  req.body;
        console.log(body);
        let form = new Form({
            name:body.name,
            company:body.company,
            email:body.email,
            telephone:body.telephone,
            message:body.message
        });
        
        form.save((err,formSaved)=>{
            if(err){res.status(400).json({
                ok:false,
                err,
                message:"form no guardado"})
            }
           
            res.status(200).json({
                ok:true,
                formSaved,
                

            })

        })
        
        

    }


}

module.exports={
    control
}