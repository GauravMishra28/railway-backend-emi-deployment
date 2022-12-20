const express= require("express")
const app= express()
const cors= require("cors")
const mongoose= require("mongoose")
const userRouter = require("./routes/user")
const Router = require("./routes/game")
require("dotenv").config()
app.use(cors())
app.use(express.json())
const PORT= process.env.PORT || 8080

app.use("/user",userRouter)

app.use("/game",Router)

app.get("/",(req,res)=>{
  res.send("Welcome to Masai Word Game")
})

mongoose.set("strictQuery", false);
const MONGOURL = process.env.MONGO_URL;

app.listen(PORT, async () => {
  await mongoose.connect(MONGOURL);
  console.log(`server started on port ${PORT}`);
});
