import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import { Database, Resource } from '@adminjs/mongoose'
import Product from './model/Product.js';
import Blog from './model/Blog.js';
import Order from './model/Order.js';


const PORT = 5000;
AdminJS.registerAdapter({
  Database,
  Resource
});

const start = async () => {
  const app = express()

  await mongoose.connect('mongodb+srv://rohitlama4567:moles900@cluster0.52xoao0.mongodb.net/Ecommerce');

  const admin = new AdminJS({
    resources: [
      {
        resource: Product,
        options: {
          properties: {
            createdAt: { isVisible: false },
            updatedAt: { isVisible: false },
          }
        }
      },
      {
        resource: Blog,
        options: {
          properties: {
            createdAt: { isVisible: false },
            updatedAt: { isVisible: false },
          }
        }
      },
      {
        resource: Order,
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
  app.use(express.json());
  app.use(morgan('dev'));


  app.get('/', (req, res) => {
    return res.status(200).json({ data: 'Welocme To Database' })
  });

  app.get('/api/products', async (req, res) => {
    try {
      const data = await Product.find({}).sort('-createdAt');

      return res.status(201).json({
        status: 'success',
        data
      });

    } catch (err) {
      return res.status(400).json(`${err}`);
    }

  });



  app.get('/api/blogs', async (req, res) => {
    try {
      const data = await Blog.find({}).sort('-createdAt');

      return res.status(201).json({
        status: 'success',
        data
      });

    } catch (err) {
      return res.status(400).json(`${err}`);
    }

  });


  app.post('/api/products', async (req, res) => {


    try {
      await Product.create(req.body);
      return res.status(200).json({
        status: 'success',
        message: 'product added'
      });
    } catch (err) {

      return res.status(400).json({ status: 'error', message: `${err}` });
    }
  });


  app.get('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
      if (mongoose.isValidObjectId(id)) {
        const product = await Product.findById(id);
        return res.status(200).json(product);
      }
      return res.status(400).json({
        status: 'error',
        message: 'please provide valid id'
      });
    } catch (err) {
      return res.status(400).json({ status: 'error', message: `${err}` });
    }
  });



  app.post('/api/blogs', async (req, res) => {


    try {
      await Blog.create(req.body);
      return res.status(200).json({
        status: 'success',
        message: 'blogs added'
      });
    } catch (err) {

      return res.status(400).json({ status: 'error', message: `${err}` });
    }
  });






  app.get('/api/orders', async (req, res) => {

    try {
      const orders = await Order.find({}).sort('-createdAt');

      return res.status(201).json(orders);

    } catch (err) {
      return res.status(400).json(`${err}`);
    }


  });



  app.post('/api/orders', async (req, res) => {

    const { totalAmount, products } = req.body;

    try {
      await Order.create({
        totalAmount,
        products,
      });

      return res.status(201).json({ data: 'successfully added' });



    } catch (err) {
      return res.status(400).json(`${err}`);
    }


  });



  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start();



