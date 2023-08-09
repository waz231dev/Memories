import express from 'express';

const app = express();
const port = 8000

app.listen(port, (err) => {
    if (err) {
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running at port :${port}`);
})