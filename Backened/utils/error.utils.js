class AppError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
        Error.captureStackTrace(this,this.constructor); //means in which line in which file error to give it
    }
}

export default AppError;