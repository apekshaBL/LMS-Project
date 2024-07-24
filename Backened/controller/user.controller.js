import { validate } from "email-validator";
import AppError from "../utils/error.utils.js";
import User from "../models/user.modelSchemas.js";
import  cloudinary from "cloudinary";
import fs from 'fs/promises'
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

const cookieOptions={
    maxAge:30*24*60*60*1000, // 7 days cookie is set
    httpOnly:true,
    secure:true
}

//register function
const  register =async(req,res,next)=>{
    const{username,email,password}=req.body;
    console.log(username,email,password);
    try{
       
    if(!username || !email || !password){
        return next(new AppError("All fields are required",400));
     }
    
    if(!validate(email)){
        return next(new AppError("enter validate email",400));
    }
    const userExists=await User.findOne({email});

    if(userExists){
        return next(new AppError("email already exists",400));
    }
  
    const user=await User.create({
        username,
        email,
        password,
        avatar:{
            public_id:email,
            secure_url:'https://in.images.search.yahoo.com/images/view;_ylt=Awr1QKT_5nxmaMUC1wC9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2I0YmI0MDVkOGQyNzAzN2UzMWVhMmJlMDg5ZjgwYzM4BGdwb3MDMTMEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimages%26type%3DE210IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D13&w=1600&h=1200&imgurl=wallpapercave.com%2Fwp%2Fwp2858551.jpg&rurl=https%3A%2F%2Fwallpapercave.com%2Fbeautiful-background-hd&size=413.2KB&p=images&oid=b4bb405d8d27037e31ea2be089f80c38&fr2=piv-web&fr=mcafee&tt=Beautiful+Backgrounds+HD+-+Wallpaper+Cave&b=0&ni=21&no=13&ts=&tab=organic&sigr=5.c.7UwZC8db&sigb=CB3EazO66ETZ&sigi=CyDZdgVcMXEA&sigt=vjns1i.Muz1p&.crumb=lXjgqOkVLvz&fr=mcafee&fr2=piv-web&type=E210IN826G0'
        }
    });
    if(!user){
        return next(new AppError("registeration failed, please try again",400))
    }
    console.log(user);

    //file upload
    console.log("file details are",JSON.stringify(req.file));
    if(req.file){
        try{
            const result=await cloudinary.v2.uploader.upload(req.file.path,{
                folder:'lms',
                width:250,
                height:250,
                gravity:'faces',
                crop:'fill'
            });
            if(result){
                user.avatar.public_id=result.public_id;
                user.avatar.secure_url=result.secure_url;

                //remove file from server
                await fs.rm(`uploads/${req.file.filename}`)
            }
        }
        catch(error){
            return next ( new AppError(error || 'file not uploaded,please try again',500))
        }
    }

        //save all data
        await user.save();

        //undefined password so dont show it
        user.password=undefined

        const token= user.generateJWTToken();
        res.cookie('token',token,cookieOptions);
        

    res.status(201).json({
        success:true,
        message:"User registered successfully",
        user,
    });
    }
    catch(error){
        return next(new AppError(error.message,400))
    }
}

//login function
const login=async (req,res,next)=>{
    const{email,password}=req.body;
    console.log(email,password);
    try{
        if(!email || !password){
            return next(new AppError("all fields are required",400))
        }

        const user=await User.findOne({email}).select('+password');

        if(!user||!(await user.comparePassword(password))){
            return next(new AppError("Incorresct email or password",400))
        }
        //undefined password so dont show is
        user.password=undefined
        const token=await user.generateJWTToken();
        res.cookie('token',token,cookieOptions);

        res.status(200).json({
            success:true,
            message:"User Logged in successfully !!",
            user,
        });
    }
    catch(error){
        return next(new AppError(error.message,400));
     
    }
}

//logout function
const logout=(req,res)=>{
    res.cookie('token',null,{
        secure:true,
        maxAge:0,
        httpOnly:true
    });
    res.status(200).json({
        success:true,
        message:"User logged out successfully !"
    });
};


//get profile function
const getProfile=async(req,res,next)=>{
    try{
        const userId=req.user.id;
        const user =await User.findById(userId);

        res.status(200).json({
            success:true,
            message:"User details",
            user
        });
    }
    catch(error){
        return next (new AppError("failed to fetch profile",400))
    }
};  

//forgotPassword
const forgotPassword=async(req,res,next)=>{
    const{email}=req.body;
    try{
        if(!email){
            return next(new AppError("Please provide your email address",400))
        };
        const user=await User.findOne({email});
        if(!user){
            return next(new AppError("User not register",400))
        };

        const resetToken=await user.generatePasswordResetToken();
        await user.save();
        const resetPasswordURL=`${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
        console.log(resetPasswordURL);
        const subject='Reset password'
        const message=`you can reset your password by clicking <a href="${resetPasswordURL}">here</a>.`;

        try{
            await sendEmail(email,subject,message);
            res.status(200).json({
                success:true,
                message:`Password reset link is sent to your email ${email}`
            });
        }
        catch(error){
            user.forgotPasswordExpiry=undefined;
            user.forgotPasswordToken=undefined;
            await user.save();
            return next(new AppError(error.message,500));
        }
    }
    catch(error){
        return next(new AppError("failed to reset the password",400))
    }

}


//resetPasword
const resetPassword=async(req,res,next)=>{

    const{resetToken}=req.params;
    const{password}=req.body;
    const forgotPasswordToken=crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

    const user=await User.findOne({
        forgotPasswordToken,
        forgotPasswordExpiry:{$gt:Date.now()}
    });
    if(!user){
        return next(
            new AppError('Token is invalid or expired ,please try again',400)
        )
    }
    user.password=password;
    user.forgotPasswordToken=undefined;
    user.forgotPasswordExpiry=undefined;
    user.save()
    res.status(200).json({
        success:true,
        message:'Password changed successfully!'
    })

}


//changed password
const changePassword=async(res,req,next)=>{
    const {oldPassword,newPassword}=req.body;
    const {id}=req.user;
    if(!oldPassword || !newPassword){
        return next(new AppError('Please provide old and new password',400))
    };
    const user=await User.findOne({password});
    if(!user){
        return next(new AppError('Password is incorrect',400))
    };
    const isPasswordValid=await user.comparePassword(oldPassword);

    if(!isPasswordValid){
        return next(new AppError("Password not valid",400))
    };

    user.password=newPassword;
    await user.save();
    user.password=undefined;

    res.status(200).json({
        success:true,
        message:'Password changed successfully!'
    });

}



//update function
const update=async(req,res,next)=>{
    const {username}=req.body;
    const{id}=req.params;
    const user=await User.findById(id);
    if(!user){
        return next(new AppError('user doest not exit',400))
    };
    if(username){
        user.username=username;
    };
    if(req.file){
        await cloudinary.v2.uploader.destroy(user.avatar.public_id);
       
                try{
                    const result=await cloudinary.v2.uploader.upload(req.file.path,{
                        folder:'lms',
                        width:250,
                        height:250,
                        gravity:'faces',
                        crop:'fill'
                    });
                    if(result){
                        user.avatar.public_id=result.public_id;
                        user.avatar.secure_url=result.secure_url;
        
                        //remove file from server
                        await fs.rm(`uploads/${req.file.filename}`)
                    }
                }
                catch(error){
                    return next ( new AppError(error || 'file not uploaded,please try again',400))
                }
            }
        
        await user.save();
        res.status(200).json({
            success:true,
            message:"proflie updated successfully"
        })
    }




//export
export { 
    register,login,logout,getProfile,forgotPassword,resetPassword,changePassword,update
}