export const authorize=(...roles)=>(req,res,next)=>req.user&&roles.includes(req.user.role)?next():res.status(403).json({message:'Permission denied.'});
