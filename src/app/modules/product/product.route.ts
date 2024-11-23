import express from 'express';
import { ProductController } from './product.controller';

const route = express.Router();
route.post('/create-bi-cycle', ProductController.createBiCycle);
route.get('/', ProductController.getAllBiCycle);
route.put('/:productId', ProductController.singleBiCylceUpdate);
route.delete('/:productId', ProductController.singleBiCylceDelete);
route.get('/:productId', ProductController.getSingleBiCylce);
export const ProductRoutes = route;
