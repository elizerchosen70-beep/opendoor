import {randomBytes,createHash} from 'node:crypto';export const randomToken=()=>randomBytes(32).toString('hex');export const hashToken=t=>createHash('sha256').update(t).digest('hex');
