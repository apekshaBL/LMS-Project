
import { Router } from "express";
const paymentrouter=Router();
import { getRazorpayApiKey,buySubscription,verifySubscription,cancelSubscription,allPayment } from "../controller/payment.controller.js";
import { authorized, isLoggedIn } from "../Middlewares/auth.middlewares.js";

paymentrouter.route('/razorpay-key').get( isLoggedIn,getRazorpayApiKey);
paymentrouter.route('/subscribe').post(isLoggedIn,buySubscription);
paymentrouter.route("/verify").post(isLoggedIn,verifySubscription);
paymentrouter.route("/unsubscribe").post(isLoggedIn,cancelSubscription);
paymentrouter.route("/").get(authorized('ADMIN'),isLoggedIn,allPayment);
export default paymentrouter;