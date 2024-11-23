import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import { productValidationSchema } from './product.validation';

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
    res.status(500).json({
      success: false,
      message: 'Bi Cycle created faild',
      data: error,
    });
  }
};
// create Bi Cylce end

export const ProductController = {
  createBiCycle,
};
