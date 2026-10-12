// knowledge routes are scaffolded but not mounted/enabled yet.
import {Router} from 'express';const router=Router();router.get('/status',(req,res)=>res.json({feature:'knowledge',configured:false,message:'Not enabled yet.'}));export {router};
