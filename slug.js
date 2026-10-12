export const slugify=v=>String(v||'').normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,150);
