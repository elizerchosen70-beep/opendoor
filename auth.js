import {api} from './api.js';export const signIn=credentials=>api('/api/auth/login',{method:'POST',body:JSON.stringify(credentials)});
