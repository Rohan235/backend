require ('dotenv').config()


console.log("Hello Rohan");

const express = require("express");
const app  = express()
const port = process.env.PORT || 4000;


app.get('/',(req,res) =>{
    res.send("hello world")
})


app.get("/twitter" , (req,res)=>{
    res.send('Rohan Jadhav');
})

app.listen( process.env.PORT ,()=>{
    console.log(`Example app lsitneing on port ${port}`);
})
