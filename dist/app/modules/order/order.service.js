"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createNewOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, product, quantity } = orderData;
    const getProduct = yield product_model_1.ProductModel.findById(product);
    if (!getProduct) {
        throw new Error('Product not found');
    }
    if (getProduct.quantity < quantity) {
        throw new Error('Not stock');
    }
    getProduct.quantity -= quantity;
    if (getProduct.quantity === 0) {
        getProduct.inStock = false;
    }
    yield getProduct.save();
    // heare is total price defind
    const totalPrice = getProduct.price * quantity;
    const orders = yield order_model_1.OrderModel.create({
        email,
        product,
        quantity,
        totalPrice,
    });
    return orders;
});
const getAllRevenewOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: {
                    $sum: '$totalPrice',
                },
            },
        },
    ]);
    return result[0];
});
exports.OrderService = {
    createNewOrder,
    getAllRevenewOrder,
};
