const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const constring=process.env.CONSTRING;
mongoose.connect(constring)
.then(()=>{
    console.log("mongodb connected")
})
.catch((error)=>console.log(error));

module.exports=mongoose;