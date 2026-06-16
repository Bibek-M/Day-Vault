import express from 'express'
import jwt from 'jsonwebtoken'
const app= express();
const port =3000;

app.use(express.json());
//Temporary db
let users :any[]=[];
//enums
enum statusCodes{
    notfound=404,
    badRequest=500,
    good=200,
    wrong=403
}
//Signup endpoint
app.post('/api/signup',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const userExist = users.find(user=> user.username===username);
    if(userExist){
        res.status(statusCodes.wrong).json({
            message:"user Already exist"
        })
    }
    users.push({username,password});
    res.status(statusCodes.good).json({
        "message":"New user created"
    })
})

//Signin endpoint
app.post('/api/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const userExist = users.find(user=> user.username===username && user.password===password);
    if(!userExist){
        res.status(statusCodes.notfound).json({
          message: "User does not exist or wrong password",
        });
    }
    const token = jwt.sign(
      {
        username: username,
      },
      "this is secret"
    ); 
    res.json({
        token:token
    })
})

app.listen(port,()=>{
    console.log(`Backend Running on Port ${port}`)
})