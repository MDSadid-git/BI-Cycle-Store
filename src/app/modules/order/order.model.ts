import mongoose, { Schema, model } from 'mongoose';
import { Order } from './order.interface';
const OrderSchema = new Schema<Order>(
  {
    email: { type: String, required: [true, 'Email is required'], trim: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: { type: Number, required: [true, 'Quantity is reuired'] },
    totalPrice: { type: Number, required: [true, 'Total price is required'] },
  },
  { timestamps: true },
);

export const OrderModel = model<Order>('Order', OrderSchema);
