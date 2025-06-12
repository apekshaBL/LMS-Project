import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import courseSliceReducer from "./Slices/CourseSlice";
import RazorpaySlice from "./Slices/RazorpaySlice";
import LecturesSlice from "./Slices/LecturesSlice";

const store=configureStore({ 
    reducer:{
        auth:AuthSliceReducer,
        course:courseSliceReducer,
        razorpay:RazorpaySlice,
        lecture:LecturesSlice
    },
    devTools:true
});
export default store;