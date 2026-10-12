import {randomUUID} from 'node:crypto';export function requestId(req,res,next){req.id=req.get('x-request-id')?.slice(0,100)||randomUUID();res.set('x-request-id',req.id);next()}
