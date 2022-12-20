const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  level: { type: String, required: true },
  score: { type: Number, default: 0 },
},{timestamps:true});

const gameModel= mongoose.model("gamedata",gameSchema)
module.exports=gameModel
