export const isHttpsUrl=v=>{try{return new URL(v).protocol==='https:'}catch{return false}};
