import {Router} from "express";
const userRoutes=Router();
import{register,login,logout,getProfile} from '../controller/user.controller.js';
import { isLoggedIn } from "../Middlewares/auth.middlewares.js";
import upload from "../Middlewares/multer.middleware.js";


userRoutes.post("/register",upload.single("avatar"),register);
userRoutes.post("/login",login);
userRoutes.get("/logout",register);
userRoutes.get("/me",isLoggedIn,getProfile);



export default userRoutes;