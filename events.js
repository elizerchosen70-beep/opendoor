export const isUpcoming=(e,now=new Date())=>Boolean(e.startsAt&&new Date(e.startsAt)>now&&e.status==='published');
