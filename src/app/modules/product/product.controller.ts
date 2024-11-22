import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductServices.createProductIntoDB(product);
    res.status(200).json({
      success: true,
      message: `${result.name} is Create Successfully`,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product created faild',
      data: error,
    });
  }
};

export const ProductController = {
  createProduct,
};
