// Payments controller starter. Add validated queries and role checks before production.
export function notConfigured(req,res){res.status(501).json({message:'The payments feature is not enabled yet.'})}
