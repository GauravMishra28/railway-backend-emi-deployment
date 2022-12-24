const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./router/route");

require("dotenv").config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.use("/users",userRouter)

app.get("/", (req, res) => {
  res.send("Welcome");
});

mongoose.set("strictQuery", false);
const MONGOURL = process.env.MONGO_URL;

app.listen(PORT, async () => {
  await mongoose
    .connect(MONGOURL)
    .then(() => {
      console.log(`server started on port ${PORT}`);
    })
    .catch((err) => console.log(err));
});
