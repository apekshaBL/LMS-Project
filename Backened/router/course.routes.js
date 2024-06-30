import express from "express";
import {Router} from "express";
import { getAllcourses,getLecturesByCourseId,createcourse,deletecourse,updatecourse,addLectures } from "../controller/course.controller.js";
import { authorized, isLoggedIn } from "../Middlewares/auth.middlewares.js";
import upload from "../Middlewares/multer.middleware.js";


const router=Router();

router.get("/",getAllcourses);
router.get("/:id",isLoggedIn,getLecturesByCourseId);
router.post("/createcourse",isLoggedIn,authorized('ADMIN'),upload.single('thumbnail'),createcourse);
router.post("/deletecourse/:id" ,isLoggedIn,authorized('ADMIN'),deletecourse);
router.put("/updatecourse/:id",isLoggedIn,authorized('ADMIN'),updatecourse);
router.post("/addLecturesToCourse/:id",isLoggedIn,authorized('ADMIN'),upload.single('thumbnail'),addLectures)



export default router;