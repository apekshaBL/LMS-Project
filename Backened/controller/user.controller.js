import { validate } from "email-validator";
const  register =(req,res)=>{
    const{username,email,password}=req.body;
    console.log(username,email,password);
    if(!username || !email || !password){
        return res.status(400).json({
            success:false,
            message:"enter all the data"
        });
    }
    if(!validate(email)){
        res.status(400).json({
            success:false,
            message:"invalidate email"
        })
    }
    res.status(200).json({
        success:true,
        message:"registered successfully"
    });
}

const login=()=>{

}

const logout=()=>{

}

const getProfile=()=>{

}
//export
export { 
    register,login,logout,getProfile
}