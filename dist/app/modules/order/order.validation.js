"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidationSchema = void 0;
const zod_1 = require("zod");
exports.OrderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email format').nonempty('Email is required'),
    product: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid Product ID format'),
    quantity: zod_1.z.number().int().positive('Quantity must be greater than zero'),
    totalPrice: zod_1.z.number().positive('Total price must be greater than zero'),
});
