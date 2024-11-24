import { ProductModel } from '../product/product.model';
import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createNewOrder = async (orderData: Order) => {
  const { email, product, quantity } = orderData;
  const getProduct = await ProductModel.findById(product);
  if (!getProduct) {
    throw new Error('Product not found');
  }
  if (getProduct.quantity < quantity) {
    throw new Error('Not stock');
  }
  getProduct.quantity -= quantity;
  if (getProduct.quantity === 0) {
    getProduct.inStock = false;
  }

  await getProduct.save();

  // heare is total price defind
  const totalPrice = getProduct.price * quantity;
  const orders = await OrderModel.create({
    email,
    product,
    quantity,
    totalPrice,
  });

  return orders;
};

const getAllRevenewOrder = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: '$totalPrice',
        },
      },
    },
  ]);
  return result[0];
};

export const OrderService = {
  createNewOrder,
  getAllRevenewOrder,
};
