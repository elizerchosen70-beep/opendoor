export const safeAnalyticsEvent=name=>({name:String(name).slice(0,80),at:new Date().toISOString()});
