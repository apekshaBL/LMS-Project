import AppError from "../utils/error.utils.js";
import jwt from "jsonwebtoken";

const isLoggedIn=async (req,res,next)=>{
    const {token}=req.cookies
    if(!token){
        return next(new AppError("Unauthenticated,please login again",4))
    }
    const userDetails=await jwt.verify(token,process.env.JWT_SECRET);
    req.user=userDetails;
    next();
}


const authorized=(...roles)=>async(req,res,next)=>{
    const currentUserRole=req.user.role;
    if(!roles.includes(currentUserRole)){
        return next(new AppError("Do not have permission to de this activity",403))

    }
    next();
}

export{
    isLoggedIn,authorized
}