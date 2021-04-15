const exp = require("express");
const app = exp();
const mongoose = require("mongoose");
const path = require("path");

app.use(exp.static(path.join(__dirname,"./dist/webapp")));

app.use(exp.json());

require("dotenv").config();

const dburl = process.env.dburl;



const port = process.env.port;
app.listen(port,()=>console.log(`Server started on port ${port}`))