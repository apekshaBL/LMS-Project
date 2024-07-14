import { validate } from "email-validator";
import AppError from "../utils/error.utils.js"
import Contact from "../models/contact.modelSchema.js";

const sendMessage=async(req,res,next)=>{
    try{
        const{name,email,message}=req.body;
        if(!name || !email || ! message){
            return next(new AppError("fill all the fields",400))
        }
        if(!validate(email)){
            return next(new AppError("invalid email",400))
        }
        const contact=new Contact({
            name:name,
            email:email,
            message:message
        })
        await contact.save();
        return res.status(200).json({Message:"your Message is sent successfully"})
    }
    catch(error){
        console.log(error);
        return next(new AppError("Error in sending Message..",400))
    }
}
export default sendMessage;