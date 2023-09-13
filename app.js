const express = require("express")
const authRoutes = require("./routes/authRoutes")

const app = express()

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/*",(req,res)=>{
    res.send("<h1>404</h1> <h2>Not Found</h2>")
})

app.use(authRoutes)

app.listen(6012,()=>{
    console.log("server on")
})