import express from 'express';
import router from './routers/index.js';
import connectDB from './config/connectDB.js';
import dotenv from 'dotenv'

dotenv.config();
const app = express();

//use express router
app.use('/', router)

connectDB();

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running at port :${process.env.PORT}`);
})