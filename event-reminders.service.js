export const reminderTime=e=>e.starts_at?new Date(new Date(e.starts_at).getTime()-86400000):null;
