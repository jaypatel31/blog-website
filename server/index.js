import express from "express"
import cors from "cors"

import connection from "./database/db.js"
import router from "./Routes/route.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use('/',router)

const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})

connection()