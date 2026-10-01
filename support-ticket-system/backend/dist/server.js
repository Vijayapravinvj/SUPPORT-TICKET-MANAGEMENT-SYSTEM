"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const index_js_1 = require("./routes/index.js");
const errorHandler_js_1 = require("./middleware/errorHandler.js");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: process.env.FRONTEND_URL ?? 'http://localhost:3000' }));
app.use(express_1.default.json());
app.get('/health', (_q, r) => r.json({ ok: true }));
app.use('/api', index_js_1.router);
app.use(errorHandler_js_1.errorHandler);
const port = Number(process.env.PORT ?? 4000);
app.listen(port, () => console.log(`API running on http://localhost:${port}`));
