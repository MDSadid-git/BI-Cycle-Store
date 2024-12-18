import { z } from 'zod';

export const productValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  brand: z.string().min(1, 'Brand is required'),
  price: z.number().positive('Price must be a positive number'),
  type: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
    required_error: 'Type is required',
  }),
  description: z.string().min(1, 'Description is required'),
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative integer'),
  inStock: z.boolean(),
});
