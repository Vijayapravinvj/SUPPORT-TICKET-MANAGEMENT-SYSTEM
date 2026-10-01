import { z } from 'zod';
import { categories, priorities, statuses } from '../types/ticket.js';
const id=z.coerce.number().int().positive();
const ticketBody=z.object({customerName:z.string().trim().min(1),customerEmail:z.string().email(),subject:z.string().trim().min(1),description:z.string().trim().min(10),priority:z.enum(priorities),category:z.enum(categories)});
export const createTicketSchema=z.object({body:ticketBody,params:z.object({}),query:z.object({})});
export const updateTicketSchema=z.object({body:ticketBody.partial().extend({status:z.enum(statuses).optional(),agentId:id.nullable().optional()}),params:z.object({id}),query:z.object({})});
export const idSchema=z.object({body:z.unknown(),params:z.object({id}),query:z.unknown()});
export const assignSchema=z.object({body:z.object({agentId:id}),params:z.object({id}),query:z.object({})});
export const statusSchema=z.object({body:z.object({status:z.enum(statuses)}),params:z.object({id}),query:z.object({})});
