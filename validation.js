export const isValidEmail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v||''));export const trimText=(v,max=3000)=>String(v||'').trim().slice(0,max);
