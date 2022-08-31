const express = require('express')
const {port} = require('./config/envs')
const { connection } = require("./config/db")
const user_routes= require('./routes')

const app = express()


app.use(express.json())

connection() //db
user_routes(app)

app.get('/',(req,res)=>{
    return res.json({
        message:"User Api Service"
    })
})

app.listen(port,()=>{
    console.log(`Listen on http://localhost:${port}`)
})