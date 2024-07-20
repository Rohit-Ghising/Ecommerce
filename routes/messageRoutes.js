import Joi from 'joi';
import validator from 'express-joi-validation';
import express from 'express';
import { addMessage, getMessages } from '../controllers/messageController.js';
import { handleAll } from '../utils/common_response.js';



const router = express.Router();

const valid = validator.createValidator({});

const messageSchema = Joi.object({
  fullname: Joi.string().min(3).max(90).required(),
  email: Joi.string().email().required(),
  phone: Joi.number().max(10).min(10).required(),
  message: Joi.string().max(500).min(10).required(),
});


router.route('/').get(getMessages).post(valid.body(messageSchema), addMessage).all(handleAll);


export default router;