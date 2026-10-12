export function plainText(v,max=3000){return String(v??'').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,'').trim().slice(0,max)}
