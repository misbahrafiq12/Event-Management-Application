import express from 'express';
import dotenv from 'dotenv';
import messageRouter from './router/messageRouter.js';
import dbConnection from './database/dbConnection.js';
import cors from 'cors';

dotenv.config({ path: "./config/config.env" });
const app = express();
const PORT = process.env.PORT;


app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['POST'],
    credentials:true

}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', messageRouter);

dbConnection();

app.listen(PORT, () => {
  console.log(`Server running successfully on PORT ${PORT}`);
});
