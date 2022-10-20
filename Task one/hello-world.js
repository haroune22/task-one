const express = require("express");
const app = express();
const Port = 3000;
const fs = require('fs');


app.get("/",(req,res)=>{
    res.write("<h1>hello world</h1>")
})

fs.writeFile('welcome.txt','console.log("hello node")//',function(err){
    console.log("data saved")
})
fs.readFile('hello.txt','utf8',function(err,data){
    console.log(data)
 })

app.listen(Port,()=>{
    console.log('hello world');
})


