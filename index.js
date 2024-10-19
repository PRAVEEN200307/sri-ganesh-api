import express from 'express';
import router from './routes/routes.js';
import { connectDB } from './lib/db.js';
import cors from 'cors'

const app = express();
const SERVER_PORT = 5000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDB()

app.get('/', (req, res) => {
    res.json({ gree: "welcome to sri ganesh engineering" });
})

app.use('/contact', router)

app.listen(SERVER_PORT, () => {
    console.log(`server is the running on http://localhost:${SERVER_PORT}`)
})