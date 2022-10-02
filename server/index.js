//Modules
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
//Routes
import postRoutes from "./routes/posts.js";

const app = express();

app.use('/posts', postRoutes);

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const URL_DB_CONNECT = 'mongodb+srv://alex:alexpwd@mernmasterydb.sw2nukk.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(URL_DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('Okay, Server is running at', PORT)))
    .catch(err => console.log(err.message));