
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';



const app=express();

//middlewares to pass json data from body
app.use(express.json());

//cors
app.use(cors({
    origin:"*",
    credentials:true
}));

//cookies
app.use(cookieParser());

app.use("/about",(req,res)=>{
    res.status(200).json({
        message:"welcome to my page"
    })
});

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).json({
        message:"Internal server Error"
    });
});

//if any url is enter ....
app.all('*',(req,res)=>{
    res.status(404).json({
        message:" OOPS !!! route not fount"
    });
})
export default app;
