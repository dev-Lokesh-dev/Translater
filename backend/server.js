import express from 'express'
import cors from 'cors'
import { config } from 'dotenv';
import { dbConnection } from './config/db.js';
import { userRouter } from './routes/user.route.js';
import { authMiddleware } from './middlewares/auth.middleware.js';
import { historyRoute } from './routes/tanslatorHistory.route.js';
import { translateWordRouter } from './routes/translateWord.route.js';
import { translatorModel } from './models/translatorHistory.model.js';
import cron from 'node-cron'
import { wrongRoute } from './middlewares/wrongRoute.middleware.js';

config();

const app = express();
app.use(cors())
app.use(express.json());


// searched history will be cleared every day in the midnight 12
cron.schedule('0 0 * * *', async() => {
   await translatorModel.deleteMany({})
    console.log('searched history cleared');
});

app.get('/',(req,res)=>{
    res.send('this is the home page')
})
app.use('/user',userRouter)
 app.use(authMiddleware)
app.use('/history',historyRoute)
app.use('/words',translateWordRouter)


app.use(wrongRoute)

const port = process.env.port;

app.listen(port,async()=>{
    await dbConnection()
    console.log(`server is runing on ${port}`);
})
