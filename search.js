import {api} from './api.js';export const searchPublishedContent=q=>api('/api/search?q='+encodeURIComponent(q));
