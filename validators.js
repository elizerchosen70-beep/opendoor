export const boundedString=(v,max=3000)=>typeof v==='string'&&v.trim().length>0&&v.length<=max;
