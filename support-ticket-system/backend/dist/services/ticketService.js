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
exports.getOrThrow = void 0;
exports.assign = assign;
exports.changeStatus = changeStatus;
const repo = __importStar(require("../repositories/ticketRepository.js"));
const AppError_js_1 = require("../utils/AppError.js");
const allowed = { OPEN: ['IN_PROGRESS', 'RESOLVED', 'CLOSED'], IN_PROGRESS: ['RESOLVED', 'CLOSED'], RESOLVED: ['CLOSED'], CLOSED: [] };
const getOrThrow = async (id) => { const t = await repo.findById(id); if (!t)
    throw new AppError_js_1.AppError(404, 'Ticket not found'); return t; };
exports.getOrThrow = getOrThrow;
async function assign(id, agentId) { await (0, exports.getOrThrow)(id); if (!await repo.agentExists(agentId))
    throw new AppError_js_1.AppError(400, 'Invalid or inactive agent'); await repo.update(id, { agentId }); return (0, exports.getOrThrow)(id); }
async function changeStatus(id, status) { const t = await (0, exports.getOrThrow)(id); if (t.status !== status && !allowed[t.status].includes(status))
    throw new AppError_js_1.AppError(400, `Invalid status transition from ${t.status} to ${status}`); await repo.update(id, { status }); return (0, exports.getOrThrow)(id); }
