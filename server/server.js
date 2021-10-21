import express from "express"
import cors from "cors"
import DotEnv from "dotenv"

import connection from "./database/db.js"
import router from "./Routes/route.js"

const app = express()
DotEnv.config();

app.use(cors())
app.use(express.json())
app.use('/',router)

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'))
}

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})

const URL = "mongodb+srv://admin:1234@blogweb.awnct.mongodb.net/BLOGWEB?retryWrites=true&w=majority"

connection(process.env.MONGODB_URI || URL)