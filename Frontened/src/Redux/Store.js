import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import courseSliceReducer from "./Slices/CourseSlice";

const store=configureStore({ 
    reducer:{
        auth:AuthSliceReducer,
        course:courseSliceReducer,
    },
    devTools:true
});
export default store;