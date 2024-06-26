const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors");
const cookieParser=require("cookie-parser");


const express=require("express");
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

//if any url is enter ....
app.all('*',(req,res)=>{
    res.status(404).json({
        message:" OOPS !!! route not fount"
    });
})
module.exports=app;
