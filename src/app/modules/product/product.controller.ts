import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import { productValidationSchema } from './product.validation';
import { ApiResponse } from '../../utils/apiResponse';
import { ApiError } from '../../utils/errorResponse';

// create Bi Cycle start
const createBiCycle = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    // use Zod validition
    const zodProductValidationData = productValidationSchema.parse(product);
    // create product data
    const result = await ProductServices.createProductIntoDB(
      zodProductValidationData,
    );
    res.status(200).json({
      success: true,
      message: `${result.name} is Create Successfully`,
      data: result,
    });
  } catch (error) {
    res.status(500).json(new ApiError(500, error, 'Faild'));
  }
};
// create Bi Cylce end

// get all bi cylce list start
const getAllBiCycle = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductIntoDB();
    res.status(200).json(new ApiResponse(200, result, 'Successfull'));
  } catch (error) {
    res.status(500).json(new ApiError(500, error, 'Faild'));
  }
};
// get all bi cylce list end
// get Single bi cylce  start
const getSingleBiCylce = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductIntoDB(productId);
    if (result === false) {
      res.status(200).json(new ApiError(500, 'Not Found', 'Faild'));
    }
    res.status(200).json(new ApiResponse(200, result, 'Successfull'));
  } catch (error) {
    res.status(500).json(new ApiError(500, error, 'Faild'));
  }
};
// get Single bi cylce  end
// get Single bi cylce update start
const singleBiCylceUpdate = async (req: Request, res: Response) => {
  try {
    const { price, quantity } = req.body;
    const { productId } = req.params;
    const result = await ProductServices.singleProductUpdateIntoDB(
      productId,
      price,
      quantity,
    );
    if (result === false) {
      res.status(500).json(new ApiError(500, 'not found', 'Faild'));
    }

    res.status(200).json(new ApiResponse(200, result, 'Successfull'));
  } catch (error) {
    res.status(500).json(new ApiError(500, error, 'Faild'));
  }
};
// get Single bi cylce update   end
// get Single bi cylce delete start end
const singleBiCylceDelete = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.singleProductDeleteIntoDB(productId);
    res.status(200).json(new ApiResponse(200, result, 'Successfull'));
  } catch (error) {
    res.status(500).json(new ApiError(500, error, 'Faild'));
  }
};
// get Single bi cylce delete  end

export const ProductController = {
  createBiCycle,
  getAllBiCycle,
  getSingleBiCylce,
  singleBiCylceUpdate,
  singleBiCylceDelete,
};
