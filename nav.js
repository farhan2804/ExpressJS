const nav=require("express");
const express=nav();
const port=5000;

express.get("/",(req,res)=>{
    res.send("hello from home page")
})
express.get("/about",(req,res)=>{
    res.send("hello from about page")
})
express.get("/Contact",(req,res)=>{
    res.send("hello from contact page")
})
express.get("/temp",(req,res)=>{
    res.send("hello from temp page")
    
})

express.listen(port,()=>{
    console.log(`server started at port ${port}`);
})