export function paginationFromQuery(q){const page=Math.max(1,parseInt(q.page||'1',10)||1),limit=Math.min(100,Math.max(1,parseInt(q.limit||'20',10)||20));return {page,limit,offset:(page-1)*limit}}
