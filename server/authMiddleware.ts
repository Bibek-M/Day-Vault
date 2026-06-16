import jwt from 'jsonwebtoken'

enum statusCodes {
  notfound = 404,
  badRequest = 500,
  good = 200,
  wrong = 403,
}

function authMiddleware(req:any,res :any,next:any){
   const token = req.headers.token;
   if(!token){
    res.status(statusCodes.wrong).json({
        message:"Wrong token"
    })    
   }
   const decoded:any = jwt.verify(token, "this is secret");
   const username= decoded.username;
   if(!username){
    res.status(statusCodes.notfound).json({
        message:"User not found"
    })
    return;
   }
    next();
}

module.exports={
 authMiddleware
};    