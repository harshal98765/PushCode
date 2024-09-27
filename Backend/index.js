const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Successfully done")
})

app.get("/user", (req, res) => {
    res.send("Hello From Users")
})

app.post("/user",(req,res)=>{
    const name = req.query.name
    const title = req.query.title
    res.send(`Good Morning ${name}, How's your ${title} job is going..!!`)

})

app.post("/userDetails",(req,res)=>{
    const name = req.body.name
    const age = req.body.age
    res.send(`User name is ${name} and age is ${age}`)
})

app.post("/userData/:id",(req,res)=>{
    const id = req.params.id
    res.send(`The User Id is ${id}`)

})

let name = "Saloni"
console.log("Hii Saloni", name);
console.log(`Hii harshal ${name}`)

app.listen(PORT, (() => {
    console.log(`Running Port on Localhost ${PORT}`)
}))


console.log("Hello")