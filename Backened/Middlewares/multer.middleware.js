import path from "path";
import multer from "multer";
//import fs from "fs/promises";


const upload=multer({
    dest:"uploads/",//file will be uploaded to this path
    limits:{fileSize:50*1024*1024}, //lomit of file
    storage:multer.diskStorage({
        destination:"uploads/",
        filename:(_req,file,cb)=>{
            cb(null,file.originalname);
        },
}),
fileFilter:(_req,file,cb)=>{
    let ext=path.extname(file.originalname);
    if(
        ext!==".jpg"&&
        ext!==".jpeg"&&
        ext!==".webp"&&
        ext!==".png"&&
        ext!==".mp4"
    ){
        cb(new Error(`Unsupported file tpye! ${ext}`),false);
        return;
    }
    cb(null,true);
},
});
export default upload;