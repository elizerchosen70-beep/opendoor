export const normaliseLeader=x=>({name:String(x.name||'').trim(),title:String(x.title||'').trim(),bio:String(x.bio||'').trim(),published:Boolean(x.published)});
