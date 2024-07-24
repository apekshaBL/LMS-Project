const errorMiddleware=(err,req,res,next)=>{
   // err.statusCode=err.statusCode||400;
   err.statusCode = (err.statusCode && err.statusCode >= 100 && err.statusCode < 600) ? err.statusCode : 500;
    err.message=err.message||"Something went wrong!";


    return res.status(err.statusCode).json({
        success:false,
        message:err.message,
        stack:err.stack
    })


}
export default errorMiddleware;