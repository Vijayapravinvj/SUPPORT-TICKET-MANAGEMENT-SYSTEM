import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { pool } from '../config/db.js';
import { TicketListQuery, TicketRow, TicketStatus } from '../types/ticket.js';

type CreateInput={customerName:string;customerEmail:string;subject:string;description:string;priority:string;category:string};
type UpdateInput=Partial<CreateInput>&{status?:TicketStatus;agentId?:number|null};
const select=`SELECT t.id,t.customer_id,c.name customer_name,c.email customer_email,t.agent_id,a.name agent_name,t.subject,t.description,t.priority,t.category,t.status,t.created_at,t.updated_at FROM tickets t JOIN customers c ON c.id=t.customer_id LEFT JOIN agents a ON a.id=t.agent_id`;
export async function createTicket(input:CreateInput):Promise<number>{
 const conn=await pool.getConnection(); try{await conn.beginTransaction();
 const [existing]=await conn.execute<RowDataPacket[]>('SELECT id FROM customers WHERE email=?',[input.customerEmail]); let customerId:number;
 if(existing[0]){customerId=Number(existing[0].id); await conn.execute('UPDATE customers SET name=? WHERE id=?',[input.customerName,customerId]);}
 else {const [r]=await conn.execute<ResultSetHeader>('INSERT INTO customers(name,email) VALUES(?,?)',[input.customerName,input.customerEmail]);customerId=r.insertId;}
 const [r]=await conn.execute<ResultSetHeader>('INSERT INTO tickets(customer_id,subject,description,priority,category) VALUES(?,?,?,?,?)',[customerId,input.subject,input.description,input.priority,input.category]); await conn.commit(); return r.insertId;
 }catch(e){await conn.rollback();throw e;}finally{conn.release();}}
export async function findById(id:number):Promise<TicketRow|null>{const [rows]=await pool.execute<RowDataPacket[]>(`${select} WHERE t.id=?`,[id]);return (rows[0] as TicketRow|undefined)??null;}
export async function list(q:TicketListQuery){const where:string[]=[];const p:(string|number)[]=[];
 if(q.search){where.push('(c.name LIKE ? OR c.email LIKE ? OR t.subject LIKE ?)');const s=`%${q.search}%`;p.push(s,s,s);} if(q.status){where.push('t.status=?');p.push(q.status);} if(q.priority){where.push('t.priority=?');p.push(q.priority);} if(q.category){where.push('t.category=?');p.push(q.category);} if(q.agentId){where.push('t.agent_id=?');p.push(q.agentId);}
 const w=where.length?` WHERE ${where.join(' AND ')}`:''; const order=q.sort==='oldest'?'t.created_at ASC':q.sort==='priority'?"FIELD(t.priority,'CRITICAL','HIGH','MEDIUM','LOW'), t.created_at DESC":'t.created_at DESC';
 const [count]=await pool.execute<RowDataPacket[]>(`SELECT COUNT(*) total FROM tickets t JOIN customers c ON c.id=t.customer_id${w}`,p); const total=Number(count[0]?.total??0); const offset=(q.page-1)*q.limit;
 const [rows]=await pool.execute<RowDataPacket[]>(`${select}${w} ORDER BY ${order} LIMIT ? OFFSET ?`,[...p,q.limit,offset]); return {data:rows as TicketRow[],page:q.page,limit:q.limit,total,totalPages:Math.ceil(total/q.limit)};}
export async function update(id:number,input:UpdateInput){const ticket=await findById(id);if(!ticket)return false; const conn=await pool.getConnection();try{await conn.beginTransaction();
 if(input.customerName||input.customerEmail){await conn.execute('UPDATE customers SET name=COALESCE(?,name),email=COALESCE(?,email) WHERE id=?',[input.customerName??null,input.customerEmail??null,ticket.customer_id]);}
 const fields:string[]=[];const vals:(string|number|null)[]=[]; for(const [k,col] of [['subject','subject'],['description','description'],['priority','priority'],['category','category'],['status','status'],['agentId','agent_id']] as const){if(input[k]!==undefined){fields.push(`${col}=?`);vals.push(input[k] as string|number|null);}}
 if(fields.length)await conn.execute(`UPDATE tickets SET ${fields.join(',')},updated_at=CURRENT_TIMESTAMP WHERE id=?`,[...vals,id]); await conn.commit();return true;}catch(e){await conn.rollback();throw e;}finally{conn.release();}}
export async function remove(id:number){const [r]=await pool.execute<ResultSetHeader>('DELETE FROM tickets WHERE id=?',[id]);return r.affectedRows>0;}
export async function agentExists(id:number){const [r]=await pool.execute<RowDataPacket[]>('SELECT id FROM agents WHERE id=? AND status="ACTIVE"',[id]);return Boolean(r[0]);}
