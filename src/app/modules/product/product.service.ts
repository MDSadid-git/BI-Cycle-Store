import mongoose from 'mongoose';
import { Product } from './product.interface';
import { ProductModel } from './product.model';

// create Bi Cycle
const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

// get Bi Cycle
const getAllProductIntoDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// get single Bi Cycle
const getSingleProductIntoDB = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId });
  if (!result) {
    return false;
  }
  return result;
};

// single Bi Cycle update data
const singleProductUpdateIntoDB = async (
  productId: string,
  price: number,
  quantity: number,
) => {
  const result = await ProductModel.findByIdAndUpdate(
    { _id: productId },
    {
      $set: {
        price,
        quantity,
        updatedAt: new Date(),
      },
    },
    { new: true },
  );
  if (!result) {
    return false;
  }
  return result;
};

// Single Bi Cycle Delete
const singleProductDeleteIntoDB = async (productId: string) => {
  const result = await ProductModel.deleteOne({
    _id: new mongoose.Types.ObjectId(productId),
  });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductIntoDB,
  singleProductUpdateIntoDB,
  singleProductDeleteIntoDB,
};
