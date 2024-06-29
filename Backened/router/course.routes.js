import express from "express";
import {Router} from "express";
import { getAllcourses,getLecturesByCourseId,createcourse } from "../controller/course.controller.js";


const router=Router();
router.get("/",getAllcourses);
router.get("/:id",getLecturesByCourseId);
router.post("/createcourse",createcourse);



export default router;