export const sortEvents=a=>[...a].sort((x,y)=>new Date(x.startsAt)-new Date(y.startsAt));
