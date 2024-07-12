import Razorpay from "razorpay";
import cloudinary from "cloudinary"
const PORT=process.env.PORT||8000;
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();


//cloudinary configuration
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//razorpay
export const razorpay=new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_SECRET,
})


app.listen(PORT,()=>{
    console.log(`server is listerning to the port ${PORT}`)
});
