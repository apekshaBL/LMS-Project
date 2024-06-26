import mongoose from "mongoose";
import { Schema,model } from "mongoose";

const userSchema=new Schema({
    username:{
        type:'String',
        required:[true,"enter your name"],
        minLength:[5,"name should be of minimum 5 letters"],
        maxLength:[50,"name sholud be of maximum 50 letters"],
        trim:true
    },
    email:{
        type:'String',
        required:[true,"enter your email"],
        lowercase:true,
        unique:[true,"this email is already registred"],
        trim:true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email address"
        ]
    },
    password:{
        type:'String',
        required:[true,"enter your password"],
        minLength:[8,"password should be of minimum 8 letters"],
        maxLength:[20,"password should be of maximum 12 letters"],
        select:false
    },
    avatar:{
        public_id:{
            type:'String'
        },
        secure_url:{
            type:'String'
        }
    },
    forgetPasswordToken:{
        type:'String'
    },
    forgetPasswordExpiry:{
        type:'Date'
    },
    role:{
        type:'String',
        enum:['USER','ADMIN'],
        default:'USER'
    }
},{
    timestamps:true
})

const User=model('User',userSchema);

export default User;