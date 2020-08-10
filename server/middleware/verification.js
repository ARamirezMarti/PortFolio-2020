const JWT= require('jsonwebtoken');



let verificationToken = (req,res,next) =>{

    // Lo primero es leer el token del header, ya que hemos decidido enviarlo por ahi

    let token=req.get('token'); // Recoger los parametros del header con .get
    
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