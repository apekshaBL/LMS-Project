import Course from "../models/course.modelSchema.js"
import AppError from "../utils/error.utils.js";


//getAllcourses
const getAllcourses=async function (req,res,next){

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
const createcourse=(req,res,next)=>{
    try{
        const{title,description,category,numbersOfLectures,createdBy}=req.body;
        console.log(title,description,category,numbersOfLectures,createdBy);
        const course=new Course({
            title:title,
            description:description,
            category:category,
            numbersOfLectures:numbersOfLectures,
            createdBy:createdBy,
        });
        course.save();
        res.status(200).json({
            success:true,
            message:'Course created',
        });
    }
    catch(error){
        return next(new AppError(error.message,500))
    };
}

export {
    getAllcourses ,getLecturesByCourseId,createcourse
}