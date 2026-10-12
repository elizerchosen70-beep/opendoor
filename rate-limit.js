import rateLimit from 'express-rate-limit';export const formLimiter=rateLimit({windowMs:900000,limit:8,standardHeaders:true,legacyHeaders:false});
