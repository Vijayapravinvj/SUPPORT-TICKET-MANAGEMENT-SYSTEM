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
exports.create = create;
exports.get = get;
exports.list = list;
exports.update = update;
exports.remove = remove;
exports.assign = assign;
exports.status = status;
const repo = __importStar(require("../repositories/ticketRepository.js"));
const service = __importStar(require("../services/ticketService.js"));
const ticket_js_1 = require("../types/ticket.js");
const AppError_js_1 = require("../utils/AppError.js");
async function create(req, res) { const id = await repo.createTicket(req.body); res.status(201).json(await service.getOrThrow(id)); }
async function get(req, res) { res.json(await service.getOrThrow(Number(req.params.id))); }
async function list(req, res) { const page = Math.max(1, Number(req.query.page) || 1), limit = Math.min(100, Math.max(1, Number(req.query.limit) || 10)); const status = typeof req.query.status === 'string' && ticket_js_1.statuses.includes(req.query.status) ? req.query.status : undefined; const priority = typeof req.query.priority === 'string' && ticket_js_1.priorities.includes(req.query.priority) ? req.query.priority : undefined; const category = typeof req.query.category === 'string' && ticket_js_1.categories.includes(req.query.category) ? req.query.category : undefined; const sort = ['newest', 'oldest', 'priority'].includes(String(req.query.sort)) ? String(req.query.sort) : 'newest'; res.json(await repo.list({ search: typeof req.query.search === 'string' ? req.query.search : undefined, status, priority, category, agentId: req.query.agentId ? Number(req.query.agentId) : undefined, sort, page, limit })); }
async function update(req, res) { const id = Number(req.params.id); if (req.body.agentId !== undefined && req.body.agentId !== null && !await repo.agentExists(req.body.agentId))
    throw new AppError_js_1.AppError(400, 'Invalid agent ID'); if (req.body.status) {
    await service.changeStatus(id, req.body.status);
    const { status, ...rest } = req.body;
    await repo.update(id, rest);
}
else if (!await repo.update(id, req.body))
    throw new AppError_js_1.AppError(404, 'Ticket not found'); res.json(await service.getOrThrow(id)); }
async function remove(req, res) { if (!await repo.remove(Number(req.params.id)))
    throw new AppError_js_1.AppError(404, 'Ticket not found'); res.json({ message: 'Ticket deleted' }); }
async function assign(req, res) { res.json(await service.assign(Number(req.params.id), req.body.agentId)); }
async function status(req, res) { res.json(await service.changeStatus(Number(req.params.id), req.body.status)); }
