import { Request, Response } from 'express';
import { OrderService } from './order.service';
import { ApiResponse } from '../../utils/apiResponse';
import { ApiError } from '../../utils/errorResponse';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderorderData = req.body;
    const result = await OrderService.createNewOrder(orderorderData);

    res.status(200).json(new ApiResponse(200, result, 'Successfull'));
  } catch (error) {
    res.status(500).json(new ApiError(500, error, 'Faild'));
  }
};

const revenueOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getAllRevenewOrder();
    res.status(200).json(new ApiResponse(200, result, 'Successfull'));
  } catch (error) {
    res.status(500).json(new ApiError(500, error, 'Faild'));
  }
};

export const OrderController = {
  createOrder,
  revenueOrder,
};
