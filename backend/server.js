import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import { notfound,errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

import postRoutes from './routes/postsRoutes.js';
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config()

connectDB()

const app = express();

if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req,res) => {
    res.send('API is running...')
})

app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)

const __dirname = path.resolve()
app.use('/upload', express.static(path.join(__dirname, '/upload')))

app.use(notfound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))
