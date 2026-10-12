export const safeTimeZone=x=>{try{new Intl.DateTimeFormat('en',{timeZone:x});return x}catch{return 'Africa/Lagos'}};
