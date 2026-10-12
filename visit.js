export const visitDetails=x=>({serviceTimes:x?.serviceTimes||'To be confirmed',address:x?.verifiedAddress||'To be confirmed',verified:Boolean(x?.verifiedAt)});
