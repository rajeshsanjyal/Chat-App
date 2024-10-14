import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import { server,app } from "./socket/socket.js"
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to Mongodb")      
    })
    .catch((err)=>{
        console.log(err)       
    })

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

//import routes
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

server.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT)
})

//error habdler
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server error"

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})