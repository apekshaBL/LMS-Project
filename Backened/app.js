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
import paymentrouter from "./router/payment.routes.js";
import contactrouter from "./router/contact.routes.js";


const app=express();

//middlewares to pass json data from body
app.use(express.json());

app.use(express.urlencoded({extended:true}))

//connect to the database
database();

//cors
app.use(cors({
    origin:[process.env.FRONTEND_URL],
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

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/courses',router);
app.use('/api/v1/payments',paymentrouter);
app.use('/api/v1/contact',contactrouter)


//handle undefined routes ....
app.all('*',(req,res)=>{
    res.status(404).json({
        message:" OOPS !!! route not fount"
    });
})  

//error handling middlewares
app.use(errorMiddleware);

export default app;
