import mongoose from "mongoose";



const orderSchema = new mongoose.Schema({
  products: [
    {
      qty: { type: Number, required: true },
      product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Product',
        required: true
      }
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);


export default Order;
