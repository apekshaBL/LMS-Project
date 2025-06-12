import axiosInstance from "@/Helpers/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    role:localStorage.getItem('role')|| " ",
    data:localStorage.getItem('data')!=undefined ?JSON.parse(localStorage.getItem('data')):{ }
};

//created thunk for sign up
export const createAccount=createAsyncThunk("/auth/signup",async(data,{rejectWithValue})=>{
    try{
        const res=axiosInstance.post("user/register",data);
        toast.promise(res,{
            loading:"Wait ! creating your account",
            success:(response)=> response.data.message,
            error:"Failed to create account"
        });
      
        return  res.data;

    }catch(error){
        toast.error(error?.response?.data?.message || "Failed to create account");
        return rejectWithValue(error.response.data);
    }
})

export const logout=createAsyncThunk("/auth/logout",async()=>{
    try{
        const res=axiosInstance.get("user/logout");
        toast.promise(res,{
            loading:"Wait ! logout is in progress...",
            success:(data)=>{
                return data?.data?.message;
            },
             error:"Failed to logout"
        })
       
    }
    catch(error){
        toast.error(error?.response?.data?.message);

    }
})

    export const updateProfile=createAsyncThunk("/user/update",async({id,data},{rejectWithValue})=>{
    try{
        const res=await axiosInstance.put(`user/update/${id}`,data);
        toast.promise(res,{
            loading:"Wait ! updating your profile",
            success:(data)=> data.data.message,
            error:"Failed to update profile"
        })
        return res.data;

    }
    catch(error){
        toast.error(error?.response?.data?.message || " Failed to update the profile");
        return rejectWithValue(error.response.data);
    }
})

export const getUserData=createAsyncThunk("/user/details",async(id,data)=>{
    try{
        const res=axiosInstance.get("user/me");
        return (await res).data;
    }
    catch(error){
        toast.error(error.message);
    }
}) 






//created thunk for login
export const login=createAsyncThunk("/auth/login",async(data,{rejectWithValue})=>{
    try{
        const res=axiosInstance.post("user/login",data);
        toast.promise(res,{
            loading:"Wait ! authentication in progress...",
            success:(response)=>{
                return data?.data?.message;
            },
            error:"Failed to login"
        });
      
        return (await res).data;

    }catch(error){
        toast.error(error?.response?.data?.message);

    }
})


const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(login.fulfilled,(state,action)=>{
            localStorage.setItem("data",JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action?.payload?.user?.role);
            state.isLoggedIn=true;
            state.data=action?.payload?.user;
            state.role=action?.payload?.user?.role
        })
        .addCase(logout.fulfilled,(state)=>{
            localStorage.clear();
            state.data={};
            state.isLoggedIn=false;
            state.role=" ";
        })
        .addCase(getUserData.fulfilled,(state,action)=>{
            if(!action?.payload?.user)return;
            localStorage.setItem("data",JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action?.payload?.user?.role);
            state.isLoggedIn=true;
            state.data=action?.payload?.user;
            state.role=action?.payload?.user?.role
        })
    }
})

//export const {}=authSlice.actions;
export default authSlice.reducer;