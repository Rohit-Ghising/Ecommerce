import mongoose from "mongoose";



const msgSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  subject: {
    type: String,
    default: ''
  }
}, { timestamps: true });


export const Message = mongoose.model('Message', msgSchema);