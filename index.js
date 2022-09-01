const express = require('express');
const mongoose = require('mongoose');
const app = express();


require("dotenv").config();
const port =  5000 || process.env.PORT;

app.listen(port, ()=>{console.log('Running in the port',port)});

mongoose
    .connect(process.env.CONNECTION_STRING_MONGODB)
    .then(() => {
        console.log('Successful connection with MongoDB');
    })
    .catch((err) => {
        console.error(err);
    });
    app.use(express.json())

