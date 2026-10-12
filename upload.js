export function uploadsDisabled(req,res){res.status(503).json({message:'Uploads are disabled until durable storage and file scanning are configured.'})}
