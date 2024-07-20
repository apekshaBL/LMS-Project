import Course from "../models/course.modelSchema.js";
import AppError from "../utils/error.utils.js";
import cloudinary from "cloudinary";
import fs from "fs/promises";                                         


//getAllcourses
const getAllcourses=async function(req,res,next){
    try{
        const courses=await Course.find({}).select(`-lectures`);
        res.status(200).json({
            success:true,
            message:'All courses',
            courses,
        });

    }catch(error){
        return next(new AppError(error.message,500))
    };
}

const getLecturesByCourseId=async(req,res,next)=>{
    try{
        const { id }=req.params;
        const course=await Course.findById(id);
        if(!course){

            return next(new AppError('Course not found',404))
        }
        res.status(200).json({
            success:true,
            message:'Lectures by course id',
            lectures:course.lectures
        });

    }catch(error){
        return next(new AppError(error.message,500))
    }
};



//create all courses
const createcourse=async(req,res,next)=>{
    try{
        const{title,description,category,numbersOfLectures,createdBy}=req.body;
        console.log(title,description,category,numbersOfLectures,createdBy);
        if(!title || !description || !category || ! createdBy){
            return next(new AppError("please fill all the fields",400))
        };

        const course=new Course({
            title:title,
            description:description,
            category:category,
            numbersOfLectures:numbersOfLectures,
            createdBy:createdBy,
        });
        if(!course){
            return next(new AppError("course not created",500))
        };


        if(req.file){
            const result=await cloudinary.v2.uploader.upload(req.file.path,{
                folder:'lms'
            }); 
            if(result){
                course.thumbnail.public_id=result.public_id;
                course.thumbnail.secure_url=result.secure_url;
            }
            fs.rm( `uploads/${req.file.filename}`);
        }

        await course.save();
        res.status(200).json({
            success:true,
            message:'Course created successfully',
            course,
        });
    }

    catch(error){
        return next(new AppError(error.message,500))
    };
}



//update course
const updatecourse=async(req,res,next)=>{
    try{
       const {id}=req.params;
       const course=await Course.findByIdAndUpdate(
        id,
        {
            $set:req.body
        },
        {
            runValidators:true
        }
       );

       if(!course){
        return next(new AppError("course not found",500))
       }

        res.status(200).json({
            success:true,
            message:'Course updated successfully',
            course,
        })
    }
    catch(error){
        return next(new AppError(error.message,500))
    }
};


//delete course
const deletecourse=async(req,res,next)=>{
    try{
        const {id}=req.params;
        const course=await Course.findById(id);
        if(!course){
            return next(new AppError("course not found",400))
        };
        await Course.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:'Course deleted  successfully'
        })
    }
    catch(error){
        return next(new AppError(error.message,500))
    }

}

const addLectures=async(req,res,next)=>{
    try{
        const {title,description}=req.body;
        const{id}=req.params;
        if(!title || !description){
            return next(new AppError("please provide title and description",400))
        };
        const course=await Course.findById(id);
        if(!course){
            return next(new AppError("course not found",400))
        }
       const lectureData={
        title,
        description,
       };

       if(req.body){
        try{
        const result=await cloudinary.v2.uploader.upload(req.file.path,{
            folder:'lms'
        }); 
        if(result){
            lectureData.lecture.public_id=result.public_id;
            lectureData.lecture.secure_url=result.secure_url;
        }
        fs.rm( `uploads/${req.file.filename}`);
    }catch(err){
        return next(new AppError(err,500));
    } 
    }
    course.lectures.push(lectureData);
    course.numbersOfLectures=course.lectures,length;
    await course.save();
    res.status(200).json({
        success:true,
        message:'Lectures added successfully !'
    });

}
    catch(err){
        return next(new AppError(err,500))

    }

}

export {
    getAllcourses ,getLecturesByCourseId,createcourse,updatecourse,deletecourse,addLectures
}