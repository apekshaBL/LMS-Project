import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import database from './config/databaseConfig.js';
import userRoutes from './router/user.routes.js';
import errorMiddleware from './Middlewares/error.middleware.js';
import router from "./router/course.routes.js";

const app=express();

//middlewares to pass json data from body
app.use(express.json());

app.use(express.urlencoded({extended:true}))

//connect to the database
database();

//cors
app.use(cors({
    origin:"*",
    credentials:true
}));

//cookies
app.use(cookieParser());

//morgan
app.use(morgan("dev"));

app.use("/about",(req,res)=>{
    res.status(200).json({
        message:"welcome to my page"
    })
});

app.use('/api/auth/',userRoutes);
app.use('/api/course/',router);


//handle undefined routes ....
app.all('*',(req,res)=>{
    res.status(404).json({
        message:" OOPS !!! route not fount"
    });
})  

//error handling middlewares
app.use(errorMiddleware);

export default app;
