require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

const MongoDB = process.env.MONGODB_URL;
mongoose.connect(MongoDB, (err)=>{
    if(!err){
        console.log("Database connected");
    }else{
        console.log("Database not connnected");
    }
});

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.get("/health", (req, res)=>{
    res.send("Backend server is up and running");
})
app.listen(port,() => {
    console.log("Express server listening at http://${host}:${port})");
})