import {Router} from "express";
const userRoutes=Router();
import{register,login,logout,getProfile} from '../controller/user.controller.js';

userRoutes.post("/register",register);
userRoutes.post("/login",login);
userRoutes.get("/logout",register);
userRoutes.get("/me",getProfile);



export default userRoutes;