export const newsletterConsent=x=>({email:String(x.email||'').trim().toLowerCase(),consent:Boolean(x.consent),topics:['events','sermons','monthly'].filter(k=>Boolean(x[k]))});
