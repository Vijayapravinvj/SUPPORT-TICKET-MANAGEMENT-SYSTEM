import { RequestHandler } from 'express';
import { ZodType } from 'zod';
export const validate = (schema: ZodType): RequestHandler => (req,res,next) => {
  const parsed=schema.safeParse({body:req.body,params:req.params,query:req.query});
  if(!parsed.success){ res.status(400).json({message:'Validation failed',errors:parsed.error.flatten()}); return; }
  req.validated=parsed.data; next();
};
