const express = require("express");
const usersModel = require("../model/userModel");
const userRouter= express.Router()

userRouter.post("/signup",async(req,res)=>{
    let user= req.body
    try{
    const player= await usersModel.create(user)
    return res.status(201).send(player)
    }
    catch(e){
   return res.status(500).send(e.message)
    }
})

// userRouter.get("/",async(req,res)=>{
//     try{
//      let data= await UserModel.find().sort({score:-1})
//      return res.status(201).send(data)
//     }
//     catch(e){
//         return res.status(500).send(e.message)
//     }
// })

module.exports=userRouter


