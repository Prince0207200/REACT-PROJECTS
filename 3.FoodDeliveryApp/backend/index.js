import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
dotenv.config();
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.routes.js';
import cors from 'cors'
import userRouter from './routes/user.routes.js';


const app=express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);






const port=process.env.PORT || 3000;

app.listen(port,()=>{
    connectDb();
    console.log("server listening at port ",port);
})



