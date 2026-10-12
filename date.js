export const validIsoDate=v=>typeof v==='string'&&!Number.isNaN(Date.parse(v));
