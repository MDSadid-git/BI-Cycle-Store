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
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
const apiResponse_1 = require("../../utils/apiResponse");
const errorResponse_1 = require("../../utils/errorResponse");
// create Bi Cycle start
const createBiCycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        // use Zod validition
        const zodProductValidationData = product_validation_1.productValidationSchema.parse(product);
        // create product data
        const result = yield product_service_1.ProductServices.createProductIntoDB(zodProductValidationData);
        res.status(200).json({
            success: true,
            message: `${result.name} is Create Successfully`,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json(new errorResponse_1.ApiError(500, error, 'Faild'));
    }
});
// create Bi Cylce end
// get all bi cylce list start
const getAllBiCycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProductIntoDB();
        res.status(200).json(new apiResponse_1.ApiResponse(200, result, 'Successfull'));
    }
    catch (error) {
        res.status(500).json(new errorResponse_1.ApiError(500, error, 'Faild'));
    }
});
// get all bi cylce list end
// get Single bi cylce  start
const getSingleBiCylce = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductIntoDB(productId);
        if (result === false) {
            res.status(200).json(new errorResponse_1.ApiError(500, 'Not Found', 'Faild'));
        }
        res.status(200).json(new apiResponse_1.ApiResponse(200, result, 'Successfull'));
    }
    catch (error) {
        res.status(500).json(new errorResponse_1.ApiError(500, error, 'Faild'));
    }
});
// get Single bi cylce  end
// get Single bi cylce update start
const singleBiCylceUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { price, quantity } = req.body;
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.singleProductUpdateIntoDB(productId, price, quantity);
        if (result === false) {
            res.status(500).json(new errorResponse_1.ApiError(500, 'not found', 'Faild'));
        }
        res.status(200).json(new apiResponse_1.ApiResponse(200, result, 'Successfull'));
    }
    catch (error) {
        res.status(500).json(new errorResponse_1.ApiError(500, error, 'Faild'));
    }
});
// get Single bi cylce update   end
// get Single bi cylce delete start end
const singleBiCylceDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.singleProductDeleteIntoDB(productId);
        res.status(200).json(new apiResponse_1.ApiResponse(200, result, 'Successfull'));
    }
    catch (error) {
        res.status(500).json(new errorResponse_1.ApiError(500, error, 'Faild'));
    }
});
// get Single bi cylce delete  end
exports.ProductController = {
    createBiCycle,
    getAllBiCycle,
    getSingleBiCylce,
    singleBiCylceUpdate,
    singleBiCylceDelete,
};
