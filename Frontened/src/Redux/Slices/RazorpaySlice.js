import axiosInstance from "@/Helpers/axiosInstance.js"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"


const initialState={
    key:"",
    subscription_id:"",
    isPaymentVerified:false,
    allPayments:{},
    finalMonths:{},
    monthlySalesRecord:[]
}

export const getRazorpayId=createAsyncThunk("/razorpay/getId",async()=>{
    try{
        const response=await axiosInstance.get("/payments/razorpay-key");
        return response.data;
    }catch(error){
        toast.error("Failed to load the data");
        throw error;
    }
});

export const purchaseCourseBundle=createAsyncThunk("/razorpay/purchasecourse",async(id,{rejectWithValue})=>{
    try{
        const response=await axiosInstance.post("/payments/subscribe",{id});
        return response.data;
    }
    catch(error){
        toast.error(error?.response?.data?.message||"Failed to purchase course bundle");
        return rejectWithValue(error.response.data);
       
    }
});

export const verifyUserPayment=createAsyncThunk("/payment/verify",async(data)=>{
    try{
        const response=await axiosInstance.post("/payments/verify",{
           razorpay_payment_id:data.razorpay_payment_id,
           razorpay_subscription_id:data.razorpay_subscription_id,
           razorpay_signature:data.razorpay_signature

        })

    }
    catch(error){
        toast.error(error?.response?.data?.message);
    }
});

export const cancelSubscription=createAsyncThunk("payment/cancel",async()=>{
    try{
        const response=await axiosInstance.post("/payments/unsubscribe");
        toast.promise(response,{
            loading:"Unsubscribing the bundle",
            success:(data)=>{
                return data?.data?.message 
            },
            error:"Failed to unsubscribe"
        })
        return (await response).data;
    }catch(error){
        toast.error(error?.response?.data?.message);
    }
})

export const getPaymentRecord=createAsyncThunk("/payment/record",async()=>{
    try{
        const response= axiosInstance.get("/payments?count=100");
        toast.promise(response,{
            loading:"Getting the payment records..",
            success:(data)=>{
                return data?.data?.message
            },
            error:"Failed to get payment records"
        })
        return (await response).data;

    }catch(error){
        toast.error("Operation failed !");
    }
})

const razorpaySlice=createSlice({
    name:"razorpay",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        builder
        .addCase(getRazorpayId.fulfilled,(state,action)=>{
            state.key=action?.payload?.key;
        })
        .addCase(purchaseCourseBundle.fulfilled,(state,action)=>{
            state.subscription_id=action?.payload?.subscription_id;
        })
        .addCase(verifyUserPayment.fulfilled,(state,action)=>{
            toast.success(action?.payload?.message);
            state.isPaymentVerified=action?.payload?.success;
        })
        .addCase(verifyUserPayment.rejected,(state,action)=>{
            toast.success(action?.payload?.message);
            state.isPaymentVerified=action?.payload?.success;
        })
        .addCase(getPaymentRecord.fulfilled,(state,action)=>{
            state.allPayments=action?.payload?.allPayments;
            state.finalMonths=action?.payload?.finalMonths;
            state.monthlySalesRecord=action?.payload?.monthlySalesRecord;
        })

    }
})

export default razorpaySlice.reducer;