import mongoose from "mongoose";
mongoose.set('strictQuery',false);//id data is not present in db then dont give error

import{config} from 'dotenv';
config();


const MONGODB_URL=process.env.MONGODB_URL||`mongodb://localhost:27017/defaultDB`;

const database=()=>{
mongoose.connect(MONGODB_URL)
.then((conn)=>{
    console.log("successfully connected to our database");
}).catch((e)=>{
    console.log(e);
})
};
export default database;





