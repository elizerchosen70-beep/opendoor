export const receiptReference=x=>String(x||'').replace(/[^a-zA-Z0-9_-]/g,'').slice(0,80);
