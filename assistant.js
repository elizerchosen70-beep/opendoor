import {api} from '../api.js';export const askChurchAssistant=message=>api('/api/ai/chat',{method:'POST',body:JSON.stringify({message})})
