import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();

mongoose.connect('mongodb://127.0.0.1/mern_mastery');
const db = mongoose.connection;
db.once('open', () => console.log('DATABASE CONNECTED SUCCESSFULY'));

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(5000, () => {
    console.log('Okay, Server is running at 5000');
});