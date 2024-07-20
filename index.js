import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import msgRoutes from './routes/messageRoutes.js';
const app = express();




mongoose.connect('mongodb+srv://rabyn900:universe9@cluster0.ikwdezp.mongodb.net/Softy').then((val) => {
  app.listen(5000, () => {
    console.log('connected')
  })
})
//
app.use(cors());
app.use(morgan('dev'));


app.get('/', (req, res) => {
  return res.status(200).json({ data: 'Welocme To Database' })
});

app.use('/api/message', msgRoutes);