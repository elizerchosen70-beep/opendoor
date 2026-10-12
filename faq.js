export const filterFaqs=(items,q)=>items.filter(x=>(x.question+' '+x.answer).toLowerCase().includes(String(q||'').toLowerCase()));
