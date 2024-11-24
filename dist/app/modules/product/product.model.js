"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
        trim: true,
    },
    brand: {
        type: String,
        required: [true, 'Brand is required'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    type: {
        type: String,
        enum: {
            values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
            message: '{VALUE} is not a valid gender',
        },
        required: [true, 'Type is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quatity is required'],
    },
    inStock: {
        type: Boolean,
        required: [true, 'Is stock is required'],
    },
}, {
    timestamps: true,
});
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
