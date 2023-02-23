import express from 'express';
import Connection from './database/db.js';
import dotenv from "dotenv";
import router from './routes/route.js';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app=express();
dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);
const PORT=8000;
const username=process.env.db_username;
const password=process.env.db_password;
Connection(username,password);
app.listen(PORT,()=>console.log(`Server is runnig successfully on port ${PORT}`));
 
 