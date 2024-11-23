import express from 'express';
import { ProductController } from './product.controller';

const route = express.Router();
route.post('/create-bi-cycle', ProductController.createBiCycle);
export const ProductRoutes = route;
