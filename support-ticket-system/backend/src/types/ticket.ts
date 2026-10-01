export const priorities = ['LOW','MEDIUM','HIGH','CRITICAL'] as const;
export const categories = ['TECHNICAL','BILLING','ACCOUNT','GENERAL'] as const;
export const statuses = ['OPEN','IN_PROGRESS','RESOLVED','CLOSED'] as const;
export type Priority = typeof priorities[number];
export type Category = typeof categories[number];
export type TicketStatus = typeof statuses[number];

export interface TicketRow {
  id:number; customer_id:number; customer_name:string; customer_email:string;
  agent_id:number|null; agent_name:string|null; subject:string; description:string;
  priority:Priority; category:Category; status:TicketStatus; created_at:Date; updated_at:Date;
}
export interface TicketListQuery { search?:string; status?:TicketStatus; priority?:Priority; category?:Category; agentId?:number; sort:'newest'|'oldest'|'priority'; page:number; limit:number; }
