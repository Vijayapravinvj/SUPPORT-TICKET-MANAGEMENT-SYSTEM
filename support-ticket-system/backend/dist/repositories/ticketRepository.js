"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTicket = createTicket;
exports.findById = findById;
exports.list = list;
exports.update = update;
exports.remove = remove;
exports.agentExists = agentExists;
const db_js_1 = require("../config/db.js");
const select = `SELECT t.id,t.customer_id,c.name customer_name,c.email customer_email,t.agent_id,a.name agent_name,t.subject,t.description,t.priority,t.category,t.status,t.created_at,t.updated_at FROM tickets t JOIN customers c ON c.id=t.customer_id LEFT JOIN agents a ON a.id=t.agent_id`;
async function createTicket(input) {
    const conn = await db_js_1.pool.getConnection();
    try {
        await conn.beginTransaction();
        const [existing] = await conn.execute('SELECT id FROM customers WHERE email=?', [input.customerEmail]);
        let customerId;
        if (existing[0]) {
            customerId = Number(existing[0].id);
            await conn.execute('UPDATE customers SET name=? WHERE id=?', [input.customerName, customerId]);
        }
        else {
            const [r] = await conn.execute('INSERT INTO customers(name,email) VALUES(?,?)', [input.customerName, input.customerEmail]);
            customerId = r.insertId;
        }
        const [r] = await conn.execute('INSERT INTO tickets(customer_id,subject,description,priority,category) VALUES(?,?,?,?,?)', [customerId, input.subject, input.description, input.priority, input.category]);
        await conn.commit();
        return r.insertId;
    }
    catch (e) {
        await conn.rollback();
        throw e;
    }
    finally {
        conn.release();
    }
}
async function findById(id) { const [rows] = await db_js_1.pool.execute(`${select} WHERE t.id=?`, [id]); return rows[0] ?? null; }
async function list(q) {
    const where = [];
    const p = [];
    if (q.search) {
        where.push('(c.name LIKE ? OR c.email LIKE ? OR t.subject LIKE ?)');
        const s = `%${q.search}%`;
        p.push(s, s, s);
    }
    if (q.status) {
        where.push('t.status=?');
        p.push(q.status);
    }
    if (q.priority) {
        where.push('t.priority=?');
        p.push(q.priority);
    }
    if (q.category) {
        where.push('t.category=?');
        p.push(q.category);
    }
    if (q.agentId) {
        where.push('t.agent_id=?');
        p.push(q.agentId);
    }
    const w = where.length ? ` WHERE ${where.join(' AND ')}` : '';
    const order = q.sort === 'oldest' ? 't.created_at ASC' : q.sort === 'priority' ? "FIELD(t.priority,'CRITICAL','HIGH','MEDIUM','LOW'), t.created_at DESC" : 't.created_at DESC';
    const [count] = await db_js_1.pool.execute(`SELECT COUNT(*) total FROM tickets t JOIN customers c ON c.id=t.customer_id${w}`, p);
    const total = Number(count[0]?.total ?? 0);
    const offset = (q.page - 1) * q.limit;
    const [rows] = await db_js_1.pool.execute(`${select}${w} ORDER BY ${order} LIMIT ? OFFSET ?`, [...p, q.limit, offset]);
    return { data: rows, page: q.page, limit: q.limit, total, totalPages: Math.ceil(total / q.limit) };
}
async function update(id, input) {
    const ticket = await findById(id);
    if (!ticket)
        return false;
    const conn = await db_js_1.pool.getConnection();
    try {
        await conn.beginTransaction();
        if (input.customerName || input.customerEmail) {
            await conn.execute('UPDATE customers SET name=COALESCE(?,name),email=COALESCE(?,email) WHERE id=?', [input.customerName ?? null, input.customerEmail ?? null, ticket.customer_id]);
        }
        const fields = [];
        const vals = [];
        for (const [k, col] of [['subject', 'subject'], ['description', 'description'], ['priority', 'priority'], ['category', 'category'], ['status', 'status'], ['agentId', 'agent_id']]) {
            if (input[k] !== undefined) {
                fields.push(`${col}=?`);
                vals.push(input[k]);
            }
        }
        if (fields.length)
            await conn.execute(`UPDATE tickets SET ${fields.join(',')},updated_at=CURRENT_TIMESTAMP WHERE id=?`, [...vals, id]);
        await conn.commit();
        return true;
    }
    catch (e) {
        await conn.rollback();
        throw e;
    }
    finally {
        conn.release();
    }
}
async function remove(id) { const [r] = await db_js_1.pool.execute('DELETE FROM tickets WHERE id=?', [id]); return r.affectedRows > 0; }
async function agentExists(id) { const [r] = await db_js_1.pool.execute('SELECT id FROM agents WHERE id=? AND status="ACTIVE"', [id]); return Boolean(r[0]); }
