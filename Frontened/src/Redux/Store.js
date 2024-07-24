import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import courseSliceReducer from "./Slices/CourseSlice";
import RazorpaySlice from "./Slices/RazorpaySlice";

const store=configureStore({ 
    reducer:{
        auth:AuthSliceReducer,
        course:courseSliceReducer,
        razorpay:RazorpaySlice
    },
    devTools:true
});
export default store;