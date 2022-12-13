const express= require('express');
const User = require('../userdetails');
const router2= express.Router()
const jwt= require("jsonwebtoken")
const JWT_SECRET= "SADASFADFAF";

router2.post("/",async (req,res)=>{
    const {email,password}= req.body
    const user= await User.findOne({email})
    if(!user)
    {
    return res.json({error:"User not find"})
    }
    if(password==user.password)
    {
        const token= jwt.sign({}, JWT_SECRET)
    }
    
    try{
        const olduser= await User.findOne({email})
       
        await User.create({
            name,
            email,
            password
        })
        res.send({status:"user created"})
    }
    catch(e){
        res.send({status:"error"})
    }
    // res.status(200).json({message:"Login"})
})

module.exports= router2