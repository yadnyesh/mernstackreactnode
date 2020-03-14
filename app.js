require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const app = express();

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log("DB Connected"));

app.get('/', (req, res) => {
    res.send("hello from node yet again");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});