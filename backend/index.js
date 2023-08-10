import express from 'express';
import router from './routers/index.js';

const app = express();
const port = 8000

//use express router
app.use('/', router)


app.listen(port, (err) => {
    if (err) {
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running at port :${port}`);
})