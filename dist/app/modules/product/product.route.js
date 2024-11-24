"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const route = express_1.default.Router();
route.post('/create-bi-cycle', product_controller_1.ProductController.createBiCycle);
route.get('/', product_controller_1.ProductController.getAllBiCycle);
route.put('/:productId', product_controller_1.ProductController.singleBiCylceUpdate);
route.delete('/:productId', product_controller_1.ProductController.singleBiCylceDelete);
route.get('/:productId', product_controller_1.ProductController.getSingleBiCylce);
exports.ProductRoutes = route;
