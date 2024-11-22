import express from 'express';

const route = express.Router();
route.post('/create-product');
export const ProductRoutes = route;
