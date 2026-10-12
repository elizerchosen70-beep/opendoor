export const toCalendarEvent=e=>({title:e.title,start:e.starts_at,location:e.location||'',description:e.summary||''});
