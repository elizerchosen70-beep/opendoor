export function chatHistory(){const a=[];return {add(x){a.push(x);if(a.length>8)a.shift()},read(){return [...a]},clear(){a.length=0}}}
