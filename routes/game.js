const express = require("express");
const Router = express.Router();

function generateWord(length) {
    let word="";
    let str="abcdefghijklmnopqrstuvwxyz"
    const n = str.length;
    for ( let i = 0; i < length; i++ ) {
        word += str(Math.floor(Math.random() * n));
    }

    return word;
}

Router.get("/",(req,res)=>{
    try{  
      let length= Math.floor(Math.random()*10)+1  
     let ans=generateWord(length)    
    res.status(201).send(ans)
    }
    catch(e){
        res.status(500).send(e.message)
    }
})


module.exports= Router