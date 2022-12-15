const mongoose = require('mongoose');

const mongoUrl =
  "mongodb+srv://gauravemi:masaiemi@cluster0.vyfkpcp.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);

const dbconnect=()=>{
    mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));
}

module.exports= dbconnect



