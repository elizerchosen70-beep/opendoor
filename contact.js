export const contactPayload=x=>({name:String(x.name||'').trim().slice(0,100),email:String(x.email||'').trim().slice(0,200),message:String(x.message||'').trim().slice(0,3000)});
