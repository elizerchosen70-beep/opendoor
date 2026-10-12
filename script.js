export const formatDate=value=>{const d=new Date(value);return Number.isNaN(d.getTime())?'Date to be confirmed':d.toLocaleDateString()};
