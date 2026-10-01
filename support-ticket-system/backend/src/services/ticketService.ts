import * as repo from '../repositories/ticketRepository.js'; import { AppError } from '../utils/AppError.js'; import { TicketStatus } from '../types/ticket.js';
const allowed:Record<TicketStatus,TicketStatus[]>={OPEN:['IN_PROGRESS','RESOLVED','CLOSED'],IN_PROGRESS:['RESOLVED','CLOSED'],RESOLVED:['CLOSED'],CLOSED:[]};
export const getOrThrow=async(id:number)=>{const t=await repo.findById(id);if(!t)throw new AppError(404,'Ticket not found');return t;};
export async function assign(id:number,agentId:number){await getOrThrow(id);if(!await repo.agentExists(agentId))throw new AppError(400,'Invalid or inactive agent');await repo.update(id,{agentId});return getOrThrow(id);}
export async function changeStatus(id:number,status:TicketStatus){const t=await getOrThrow(id);if(t.status!==status&&!allowed[t.status].includes(status))throw new AppError(400,`Invalid status transition from ${t.status} to ${status}`);await repo.update(id,{status});return getOrThrow(id);}
