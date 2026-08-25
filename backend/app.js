import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/product.route.js"
 dotenv.config()
 const app = express()

//midlle ware 
const allowedOrigin =[
    "http://localhost:5173",
    "https://mongodb-crud-smoky-five.vercel.app/"
]
app.use (cors({origin:allowedOrigin, credentials: true}))
app.use (helmet())
app.use (morgan("dev"))
app.use (express.json())
app.use (express.urlencoded({extended:false}))
app.use ("/api/products", router)
const PORT = process.env.PORT ||5000;
app.get("/", (req,res)=>{
    res.send("Welcome to mongodb")
});
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to database");
//     app.listen (PORT,()=>{
//     console.log (`server is running on port: http://localhost:${PORT}`)
// }) 
}).catch((error)=>{
    console.error(error); 
})

export default app