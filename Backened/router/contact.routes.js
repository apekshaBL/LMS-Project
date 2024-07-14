import { Router } from "express";
import sendMessage from "../controller/contact.controller.js";
const contactrouter=Router();




contactrouter.post("/contact",sendMessage);
export default contactrouter;