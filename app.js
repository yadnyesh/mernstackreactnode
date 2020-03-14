require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/userRoutes');


mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log("DB Connected"));

app.use("/api",userRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});