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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const apiResponse_1 = require("../../utils/apiResponse");
const errorResponse_1 = require("../../utils/errorResponse");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderorderData = req.body;
        const result = yield order_service_1.OrderService.createNewOrder(orderorderData);
        res.status(200).json(new apiResponse_1.ApiResponse(200, result, 'Successfull'));
    }
    catch (error) {
        res.status(500).json(new errorResponse_1.ApiError(500, error, 'Faild'));
    }
});
const revenueOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderService.getAllRevenewOrder();
        res.status(200).json(new apiResponse_1.ApiResponse(200, result, 'Successfull'));
    }
    catch (error) {
        res.status(500).json(new errorResponse_1.ApiError(500, error, 'Faild'));
    }
});
exports.OrderController = {
    createOrder,
    revenueOrder,
};
