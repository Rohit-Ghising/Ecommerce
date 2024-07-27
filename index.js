import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import msgRoutes from './routes/messageRoutes.js';
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import { Database, Resource } from '@adminjs/mongoose'
import { Message } from './model/Message.js';

const PORT = 5000;
AdminJS.registerAdapter({
  Database,
  Resource
});

const start = async () => {
  const app = express()

  await mongoose.connect('mongodb+srv://rabyn900:universe9@cluster0.ikwdezp.mongodb.net/Softy');

  const admin = new AdminJS({
    resources: [
      {
        resource: Message,
        options: {
          properties: {
            createdAt: { isVisible: false },
            updatedAt: { isVisible: false },
          }
        }
      }
    ]
  })

  const adminRouter = AdminJSExpress.buildRouter(admin)

  app.use(admin.options.rootPath, adminRouter);




  app.use(cors());
  app.use(morgan('dev'));


  app.get('/', (req, res) => {
    return res.status(200).json({ data: 'Welocme To Database' })
  });

  app.use('/api/message', msgRoutes);


  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start();



