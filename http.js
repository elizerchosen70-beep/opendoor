export const publicError=(message,status=400)=>Object.assign(new Error(message),{status});
