const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = 5000;
const url = "mongodb://localhost:27017/local"

app.use(express.json());

const userSchema = new mongoose.Schema({
    name: String,
    role: String
})

const userModel = mongoose.model("user",userSchema)

app.post("/user",(req,res)=>{
    const user = new userModel({
        name : req.body.name,
        role : req.body.role
        })
        
        user.save().then(()=>{
            res.send("data added")
        })
})

mongoose.connect(url).then(()=>{
    console.log("Database connected")
})

app.listen(PORT, ()=>{
    console.log("port is running");
})