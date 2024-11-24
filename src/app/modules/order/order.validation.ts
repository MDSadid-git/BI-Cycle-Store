import { z } from 'zod';

export const OrderValidationSchema = z.object({
  email: z.string().email('Invalid email format').nonempty('Email is required'),
  product: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid Product ID format'),
  quantity: z.number().int().positive('Quantity must be greater than zero'),
  totalPrice: z.number().positive('Total price must be greater than zero'),
});
