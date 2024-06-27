
const PORT=process.env.PORT||8080;
import app from "./app.js";
import {config} from 'dotenv';
config();

app.listen(PORT,()=>{
    console.log(`server is listerning to the port ${PORT}`)
});
