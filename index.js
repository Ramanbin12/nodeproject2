const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const app=express()
module.exports=app
app.use(cors())
app.use(bodyparser.json())

app.listen(2000,()=>{
    console.log("server connected")
})