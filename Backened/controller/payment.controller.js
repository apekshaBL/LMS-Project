
import dotenv from "dotenv";
import User from "../models/user.modelSchemas.js";
import AppError from "../utils/error.utils.js";
import { razorpay } from "../server.js";
import crypto from "crypto";
import Payment from "../models/payment.model.js"
dotenv.config();
const getRazorpayApiKey=async(req,res,next)=>{
    res.status(200).json({
        success:true,
        message:"Razorpay API key",
        key:process.env.RAZORPAY_KEY_ID
    })

}

const buySubscription=async(req,res,next)=>{
    const{id}=req.body;
    const user=await User.findById(id);
    if(!user){
        return next(new AppError ("user do not exits",500))
    };
    if(user.role==='ADMIN'){
        return next(new AppError("ADMIN can'nt purchase subscription",500))
    }

    const subscription = await razorpay.subscriptions.create({
        plan_id:process.env.RAZORPAY_PLAN_ID,
        customer_notify:1
    });

    user.subscription.id=subscription.id;
    user.subscription.status=subscription.status;
    await user.save();
    res.status(200).json({
        success:true,
        message:"Subscribed Successfully",
        subscription_id:subscription.id
    })

}


const verifySubscription=async(req,res,next)=>{
    const {id}= req.user;
    const{razorpay_payment_id,razorpay_signature,razorpay_subscription_id}=req.body;
    const user=await User.findById(id);
    if(!user){
        return next(new AppError("user do not exits",500))
    };
    const subscriptionId=user.subscription_id;
    const generatedSignature=crypto
    .createHmac('sha256',process.env.RAZORPAY_SECRET)
    .update(`${razorpay_payment_id}|${subscriptionId}`)
    .digest('hex');
    if(generatedSignature !==razorpay_signature){
        return next(new(AppError("payment not verified,please try again",500)))
    }
    await Payment.create({
        razorpay_payment_id,
        razorpay_signature,
        razorpay_subscription_id,
    });
    user.subscription.status='active'
    await user.save();

    res.status(200).json({
        success:true,
        message:"Subscription verified successfully"
    });

}


const cancelSubscription=async(req,res,next)=>{
    const {id}=req.user;
    const user=await User.findById(id);
    if(!user){
        return next(new AppError("User do not exits",500))
    };
    if(user.role==="ADMIN"){
        return next(new AppError("Admin cannot cancel subscription",500))
    };
    const subscriptionId=user.subscription_id;
    const subscription=await razorpay.subscriptions.cancel(
        subscriptionId
    )
    user.subscription.status=subscription.status;
    await user.save();


}


const allPayment=async(req,res,next)=> {
    const {count}=req.query;
    const subscriptions=await razorpay.subscriptions.all({
        count:count||10,
    });
    req.status(200).json({
        success:true,
        message:"All payments",
        subscriptions
    });
};  

export {
 getRazorpayApiKey,
 buySubscription,verifySubscription,cancelSubscription,allPayment
}