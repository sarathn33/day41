import express from 'express';
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from 'mongoose';
import { assignStudentRoute, changeMentorRoute, createMentorRoute, createStudentRoute, getMentorRoute, getStudentRoute, getStumenRoute } from './routes/route.js';


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//Database connection

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true})
.then(()=>console.log("Database connection established"))
.catch((error)=>console.log("Error connecting",error))


app.get("/",(req,res)=>{
    res.status(200).send("Welcome To Student Mentor App")
})

//setting routes
app.use("/mentor", createMentorRoute);
app.use("/student", createStudentRoute);
app.use("/", assignStudentRoute);
app.use("/", changeMentorRoute);
app.use("/",getStumenRoute);
app.use("/",getMentorRoute);
app.use("/",getStudentRoute);



//port connection
app.listen(process.env.PORT,()=>console.log("Server started at the port ",process.env.PORT))