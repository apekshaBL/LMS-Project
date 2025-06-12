import axiosInstance from "@/Helpers/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState={
    lectures:[]
}

export const getCourseLectures=createAsyncThunk("/course/lecture/get",async(cid)=>{
    try{
        const response=axiosInstance.get(`/courses/${cid}`);
        toast.promise(response,{
            loading:'Fetching course lectures',
            success:"Lectures fetched Successfully",
            error:"Failed to load the lectures"
        });
        return (await response).data;
    }catch(error){
        toast.error(error?.response?.data?.message);
    }
});

export const addCourseLectures=createAsyncThunk("/course/lecture/add",async(data)=>{
    try{
        const formData=new FormData();
        formData.append("lecture",data.lectures);
        formData.append("Title",data.title);
        formData.append("Description",data.description);
        const response=axiosInstance.post(`/addLecturesToCourse/${data.id}`,formData);
        toast.promise(response,{
            loading:"adding course lectures",
            success:"Lectures added succesfully",
            error:"Failed to add the Lectures"
        });
        return (await response).data;

    }catch(error){
        toast.error(error?.response?.data?.message);
    }
});

export const deleteCourseLectures=createAsyncThunk("/course/lecture/delete",async(data)=>{
    try{
        const response=axiosInstance.delete(`/courses?courseId=${data.courseId}&lecturesId=${data.lecturesId}`);
        toast.promise(response,{
            loading:"delete course lectures",
            success:"Lectures deleted successfully",
            error:"Failed to delete the Lectures"
        })
        return(await response).data;
    }
    catch(error){
        toast.error(error?.response?.data?.message);
    }
})





const lectureSlice=createSlice({
    name:"lecture",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCourseLectures.fulfilled,(state,action)=>{
            console.log(action);
            state.lectures=action?.payload?.lectures;
        })
        .addCase(addCourseLectures.fulfilled,(state,action)=>{
            console.log(action);
            state.lectures=action?.payload?.course?.lectures;
        })
    }
})
export default lectureSlice.reducer;