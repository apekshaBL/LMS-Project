import express from "express";
import {Router} from "express";
import { getAllcourses,getLecturesByCourseId,createcourse } from "../controller/course.controller.js";
import { isLoggedIn } from "../Middlewares/auth.middlewares.js";


const router=Router();
router.get("/",getAllcourses);
router.get("/:id",isLoggedIn,getLecturesByCourseId);
router.post("/createcourse",createcourse);



export default router;