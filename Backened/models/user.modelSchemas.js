import mongoose from "mongoose";
import { Schema,model } from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from  'jsonwebtoken';
import crypto from 'crypto';

const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"enter your name"],
        minLength:[5,"name should be of minimum 5 letters"],
        maxLength:[50,"name sholud be of maximum 50 letters"],
        trim:true
    },
    email:{
        type:String,
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
        type:String,
        required:[true,"enter your password"],
        minLength:[8,"password should be of minimum 8 letters"],
        select:false
    },
    avatar:{
        public_id:{
            type:String
        },
        secure_url:{
            type:String
        }
    },
    forgetPasswordToken:{
        type:String
    },
    forgetPasswordExpiry:{
        type:Date
    },
    role:{
        type:String,
        enum:['USER','ADMIN'],
        default:'USER'
    }
},{
    timestamps:true
});

//hashed password
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password=await bcrypt.hash(this.password,10);
    next();
});

userSchema.methods.generateJWTToken = function() {
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            subscription: this.subscription,
            role: this.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRY,
        }
    );
};

//compare password
userSchema.methods.comparePassword = async function (plainTextPassword) {
    return await bcrypt.compare(plainTextPassword, this.password);
};
//generate dynamic token (for reset password)

userSchema.methods.generatePasswordResetToken=async function (){
    const resetToken=crypto.randomBytes(20).toString('hex');
    this.forgetPasswordToken=crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
    this.forgetPasswordExpiry=Date.now()+15*60*1000;
    return resetToken;
}



const User=model('User',userSchema);

export default User;