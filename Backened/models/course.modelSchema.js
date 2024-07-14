import mongoose from "mongoose";
import { Schema,model } from "mongoose";


const courseSchema=new Schema({
    title:{
        type:String,
        minLength:[8,'Title should be of minimum 8 length'],
        maxLength:[60,"Title should be of less than 60 character"],
        required:[true,"Title is required!"],
        trim:true,
    },
    description:{
        type:String,
        minLength:[8,"description should be of minimum 8 charachter"],
        maxLength:[400,"decription should be less than 400 characters"],
        required:[true,"description is required"],
        trim:true,
    },
    category:{
        type:String,
        required:[true,"category is required"],
       
    },
    thumbnail:{
        public_id:{
            type:String,
    
        },
        secure_url:{
            type:String,
        }
    },
    lectures:[
        {
            title:String,
            description:String,
            lecture:{
                public_id:{
                    type:String,
                
                },
                secure_url:{
                    type:String,
                
                }
            }
        }
    ],
    numbersOfLectures:{
        type:Number,
        default:0,
    },
    createdBy:{
        type:String,
        required:true,
    }
},{
    timestamps:true
});

const Course=model('Course',courseSchema);
export default Course;