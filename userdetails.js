const mongoose= require("mongoose")

const userDetails= new mongoose.Schema({
    name: String,
    email:{type:String,unique:true},
    password:String,
})

let usermodel= mongoose.model("userInfo",userDetails)

module.exports= usermodel