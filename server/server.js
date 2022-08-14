import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import PostRouter from './routes/posts.js';

const app = express();

mongoose.connect('mongodb://localhost/mern_mastery', {useNewUrlParser: true});
const db = mongoose.connection;

db.once('open', () => console.log(`DATABASE CONNECTED`));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', PostRouter);

app.listen('5000', () => {
    console.log('Server connected successfuly');
})