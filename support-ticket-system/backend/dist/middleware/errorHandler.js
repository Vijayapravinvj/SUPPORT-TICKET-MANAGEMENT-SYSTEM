"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const AppError_js_1 = require("../utils/AppError.js");
const errorHandler = (err, _req, res, _next) => {
    console.error(err);
    if (err instanceof AppError_js_1.AppError) {
        res.status(err.statusCode).json({ message: err.message });
        return;
    }
    res.status(500).json({ message: 'Internal server error' });
};
exports.errorHandler = errorHandler;
