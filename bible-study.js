export const readingProgress=(done,total)=>total?Math.min(100,Math.round(Math.max(0,done)/total*100)):0;
