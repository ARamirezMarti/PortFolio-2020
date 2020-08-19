const JWT= require('jsonwebtoken');



let verificationToken = (req,res,next) =>{

    let token=req.get('token'); 
    
    JWT.verify(token,process.env.SEED,(err,decoded)=>{
        if(err){
            return res.status(401).json({
                ok:false,
                err:{
                    message:"Token no valido"
                }
            });
        }
 
        next();
    })


};



 module.exports={
    verificationToken
 }