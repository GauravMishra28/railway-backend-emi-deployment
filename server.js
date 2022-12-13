//user- gauravemi
//pass-  masaiemi
const express= require("express")
const app= express()
const mongoose = require("mongoose");
const router = require("./routes/register.route");
const cors= require("cors");
const router2 = require("./routes/login.route");
app.use(cors())
app.use(express.json())

app.use("/register",router)
app.use("/login",router2)

const mongoUrl =
  "mongodb+srv://gauravemi:masaiemi@cluster0.vyfkpcp.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));


app.listen(8080, ()=>{
    console.log("server started at port 8080")
})
