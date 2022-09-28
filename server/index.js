import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

mongoose.connect('mongodb://127.0.0.1/users_ejs_crud');
const db = mongoose.connection;
db.once('open', () => console.log('DATABASE CONNECTED SUCCESSFULY'));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => {
    console.log('Okay, Server is running at 5000');
});