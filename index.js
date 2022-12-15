const express= require("express")
const cors= require("cors");
const router = require("./routes/products");
const app= express();
require("dotenv").config()
const PORT= process.env.PORT || 8000

const dbconnect = require("./db.connect");
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use("/products",router)

app.get("/",(req,res)=> res.send("Hello from homepage"))

app.listen(PORT,async()=>{
    await(dbconnect()) 
    console.log(`Server running on PORT ${PORT}`)
})