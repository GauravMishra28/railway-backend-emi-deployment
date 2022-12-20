const express = require("express");
const UserModel = require("../model/gamemodel");

const userRouter= express.Router()

userRouter.post("/",async(req,res)=>{
    let info= req.body
    try{
    const player= await UserModel.create(info)
    return res.status(201).send(player)
    }
    catch(e){
   return res.status(500).send(e.message)
    }
})

userRouter.get("/",async(req,res)=>{
    try{
     let data= await UserModel.find().sort({score:-1})
     return res.status(201).send(data)
    }
    catch(e){
        return res.status(500).send(e.message)
    }
})

module.exports=userRouter


