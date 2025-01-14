const express=require("express");
const app = express();
const mongoose=require("mongoose");
const connection=require("./connnection/connection");
const dotenv=require("dotenv")
dotenv.config();
const cors=require("cors");
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

app.get("/",async(req,res)=>{
    res.send("Hello world");
})


app.listen(2288,()=>{console.log("server started on 2288")});


