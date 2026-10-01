"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agents = agents;
exports.dashboard = dashboard;
const db_js_1 = require("../config/db.js");
async function agents(_req, res) { const [r] = await db_js_1.pool.execute('SELECT id,name,email,department,status,created_at FROM agents ORDER BY name'); res.json(r); }
async function dashboard(_req, res) { const [s] = await db_js_1.pool.execute(`SELECT COUNT(*) total,SUM(status='OPEN') open,SUM(status='IN_PROGRESS') inProgress,SUM(status='RESOLVED') resolved FROM tickets`); const [recent] = await db_js_1.pool.execute(`SELECT t.id,c.name customer_name,t.subject,t.priority,t.status,t.created_at FROM tickets t JOIN customers c ON c.id=t.customer_id ORDER BY t.created_at DESC LIMIT 5`); res.json({ total: Number(s[0]?.total ?? 0), open: Number(s[0]?.open ?? 0), inProgress: Number(s[0]?.inProgress ?? 0), resolved: Number(s[0]?.resolved ?? 0), recent }); }
