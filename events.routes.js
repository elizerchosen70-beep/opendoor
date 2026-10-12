// events routes are scaffolded but not mounted/enabled yet.
import {Router} from 'express';const router=Router();router.get('/status',(req,res)=>res.json({feature:'events',configured:false,message:'Not enabled yet.'}));export {router};
