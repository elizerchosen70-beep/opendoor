export const campaignCanSend=x=>Boolean(x&&x.approved===true&&x.audienceCount>0);
