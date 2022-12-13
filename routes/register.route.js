const express= require('express');
const User = require('../userdetails');
const router= express.Router()

router.post("/",async (req,res)=>{
    const {name,email,password}= req.body
    try{
        const olduser= await User.findOne({email})
        if(olduser)
        {
        return res.json({error:"User already exists"})
        }
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

module.exports= router