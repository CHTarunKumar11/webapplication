const exp = require("express");
const app = exp();
const mongodb = require("mongodb").MongoClient;
const path = require("path");

require("dotenv").config();

app.use(exp.static(path.join(__dirname,"./dist/webapp")));

app.use(exp.json());


const dburl=process.env.dburl

app.use((req,res,next)=>{
    res.send({message:req.url+" is invalid"});
})

app.use((err,req,res,next)=>{
    console.log(err.message);
    res.send({message:"error occured",reason:err.message});
})

const port = process.env.PORT;

app.listen(process.env.PORT,()=>console.log(`Server started on port ${port}`));
