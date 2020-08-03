'use strict'
const Project = require('../model/project');

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
            date:dateNow,
            image:path,
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
             
    }

}

module.exports={
    control
}