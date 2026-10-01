"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const t = __importStar(require("../controllers/ticketController.js"));
const m = __importStar(require("../controllers/miscController.js"));
const asyncHandler_js_1 = require("../utils/asyncHandler.js");
const validate_js_1 = require("../middleware/validate.js");
const validators_js_1 = require("../utils/validators.js");
exports.router = (0, express_1.Router)();
exports.router.post('/tickets', (0, validate_js_1.validate)(validators_js_1.createTicketSchema), (0, asyncHandler_js_1.asyncHandler)(t.create));
exports.router.get('/tickets', (0, asyncHandler_js_1.asyncHandler)(t.list));
exports.router.get('/tickets/:id', (0, validate_js_1.validate)(validators_js_1.idSchema), (0, asyncHandler_js_1.asyncHandler)(t.get));
exports.router.put('/tickets/:id', (0, validate_js_1.validate)(validators_js_1.updateTicketSchema), (0, asyncHandler_js_1.asyncHandler)(t.update));
exports.router.delete('/tickets/:id', (0, validate_js_1.validate)(validators_js_1.idSchema), (0, asyncHandler_js_1.asyncHandler)(t.remove));
exports.router.patch('/tickets/:id/assign', (0, validate_js_1.validate)(validators_js_1.assignSchema), (0, asyncHandler_js_1.asyncHandler)(t.assign));
exports.router.patch('/tickets/:id/status', (0, validate_js_1.validate)(validators_js_1.statusSchema), (0, asyncHandler_js_1.asyncHandler)(t.status));
exports.router.get('/dashboard', (0, asyncHandler_js_1.asyncHandler)(m.dashboard));
exports.router.get('/agents', (0, asyncHandler_js_1.asyncHandler)(m.agents));
